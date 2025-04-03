<script setup lang="ts">
import { ref } from 'vue'
import { DefaultTemplate } from '@/template'
import { mdiPlusCircle, mdiTrashCan } from '@mdi/js'
import type { IDoctor, GetDoctorListRequest, GetDoctorListResponse } from '@/interfaces/doctor'
import request from '@/engine/httpClient'
import { useToastStore } from '@/stores'

const toastStore = useToastStore()

const isLoadingList = ref<boolean>(false)
const itemsPerPage = ref<number>(10)
const total = ref<number>(0)
const page = ref<number>(1)
const items = ref<IDoctor[]>([])

const headers = [
  {
    title: 'ID',
    key: 'id',
    sortable: false,
    width: 0,
    cellProps: { class: 'text-no-wrap' }
  },
  { title: 'Nome', key: 'name', sortable: false },
  { title: 'Duração', key: 'phoneNumber', sortable: false },
  { title: 'Documento', key: 'documentNumber', sortable: false },
  { title: 'Status', key: 'statusId', sortable: false },
  { title: 'Nascimento', key: 'birthDate', sortable: false },
  {
    title: 'Ações',
    key: 'actions',
    sortable: false,
    width: 0,
    cellProps: { class: 'text-no-wrap' }
  }
]

const handleDataTableUpdate = async ({ page: tablePage, itemsPerPage: tableItemsPerPage }: any) => {
  page.value = tablePage
  itemsPerPage.value = tableItemsPerPage
  loadDataTable()
}

const loadDataTable = async () => {
  isLoadingList.value = true
  const { isError, data } = await request<GetDoctorListRequest, GetDoctorListResponse>({
    method: 'GET',
    endpoint: 'doctor/list',
    body: {
      itemsPerPage: itemsPerPage.value,
      page: page.value
    }
  })

  if (isError) return

  items.value = data.items
  total.value = data.total
  isLoadingList.value = false
}

const deleteListItem = async (item: IDoctor) => {
  const shouldDelete = confirm(`Deseja mesmo deletar ${item.name}?`)

  if (!shouldDelete) return

  try {
    const response = await request<null, null>({
      method: 'DELETE',
      endpoint: `doctor/delete/${item.id}`
    })

    if (response.isError) return

    toastStore.setToast({
      type: 'success',
      text: 'doctor deletada com sucesso!'
    })

    loadDataTable()
  } catch (e) {
    console.error('Falha ao deletar item da lista', e)
  }
}
</script>

<template>
  <default-template>
    <template #title> Lista de Médicos </template>

    <template #action>
      <v-btn color="primary" :prepend-icon="mdiPlusCircle" :to="{ name: 'doctor-insert' }">
        Adicionar doctor
      </v-btn>
    </template>

    <template #default>
      <v-data-table-server
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items-length="total"
        :items="items"
        :loading="isLoadingList"
        item-value="id"
        @update:options="handleDataTableUpdate"
      >
        <template #[`item.actions`]="{ item }">
          <v-tooltip text="Deletar doctor" location="left">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                :icon="mdiTrashCan"
                size="small"
                color="error"
                class="mr-2"
                @click="deleteListItem(item)"
              />
            </template>
          </v-tooltip>
        </template>
      </v-data-table-server>
    </template>
  </default-template>
</template>
