<template>
  <div>
    <div id="packages">
      <b-table
          id="packages"
          :items="packages"
          :per-page="perPage"
          :current-page="currentPage"
          hover
          @row-clicked="handler"
          :fields="fields"
      >
      </b-table>

      <b-modal v-model="modalShow"
               size="lg"
               :title="fullInfoPack.name"
               centered
               v-if="modalShow"
      >
        <div class="d-flex flex-column">
          {{ fullInfoPack.description }}
          <a :href="fullInfoPack.links.npm">{{ fullInfoPack.links.npm }}</a>
          <p style="margin-bottom: 5px; margin-top: 10px">Keywords</p>
          <div class="keywords-list d-flex flex-wrap">
            <div class="keywords-list__item" v-for="keyword in fullInfoPack.keywords">
              {{ keyword }}
            </div>
          </div>
        </div>
        <template v-slot:modal-footer>
          <div class="w-100">
            <div class="d-flex flex-column">
              <a target="_blank"
                 :href="fullInfoPack.author.url"
                 class="float-left"
              >
                {{ fullInfoPack.author.name }}
              </a>
              <p>{{ date.getDay() }} {{ getMonth }} {{ date.getFullYear() }}</p>
            </div>
            <b-button
                variant="primary"
                size="sm"
                class="float-right"
                @click="modalShow = false"
            >
              Close
            </b-button>
          </div>
        </template>
      </b-modal>
    </div>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="packages"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      modalShow: false,
      fields: ['name', 'author.name', 'description'],
      fullInfoPack: null
    }
  },
  props: {
    packages: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    rows() {
      return this.packages.length
    },
    date() {
      return new Date(this.fullInfoPack.date)
    },
    getMonth() {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
      return monthNames[this.date.getMonth()]
    }
  },
  methods: {
    handler(e) {
      this.fullInfoPack = e
      this.modalShow = !this.modalShow
    },
  }
}
</script>

<style scoped lang="scss">
.keywords-list__item {
  padding: 2px 10px 4px 10px;
  border-radius: 4px;
  border: 1px solid #7f828b;
  background-color: #ffffff;
  margin-right: 10px;
  margin-bottom: 4px;
}
</style>
