<template>
    <!-- Main content -->
    <div class="content">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Stores</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Stores</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
        
            <div class="row">
                <div class="col-md-12 mt-2">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Stores</h3>

                            <div class="card-tools">
                                <router-link to="/store/create" class="btn btn-success">
                                    <i class="fa fa-plus fa-fw"></i> Add New Store
                                </router-link>
                            </div>
                        </div>
                          <!-- /.card-header -->
                          
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Store Name</th>
                                        <th>Country</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="(store, index) in stores.data" :key="index">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ store.name }}</td>
                                        <td>{{ store.country }}</td>
                                        <td>{{ store.email }}</td>
                                        <td>{{ store.phone }}</td>
                                        <td>
                                            

                                            <div class="btn-group flex-wrap">
                                                <button type="button" class="btn btn-default dropdown-toggle  table-action-btn" data-toggle="dropdown" aria-expanded="true">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </button>
                                                <div class="dropdown-menu" role="menu">
                                                    <a class="dropdown-item" href="#">
                                                        <i class="fas fa-eye"></i> View
                                                    </a>

                                                    <a class="dropdown-item" href="#">
                                                        <i class="fa fa-edit"></i> Edit
                                                    </a>

                                                    <a class="dropdown-item" href="#" @click="deleteUser(store.id)">
                                                        <i class="fas fa-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->


                        <div class="card-footer">
                            <pagination :data="stores" @pagination-change-page="getResults"></pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
    export default {

        data(){
            return {
                stores: {

                },
                form: new Form({
                    id: '',
                    name: '',
                    email: '',
                    password:  '',
                    type: '',
                    bio: '',
                    photo: '' 
                })
                
            }
        },

        methods:{

            getResults(page = 1){
                axios.get('/api/store?page=' + page)
                .then(response => {
                    this.stores = response.data;
                })
            },

            loadStores(){
                axios.get('/api/store').then(({ data }) => (this.stores = data));
            },


            deleteUser(id){
                swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })
                .then((result) => {
                    //Send  request to the server
                    if (result.value) {
                        this.form.delete('/api/store/'+id)
                        .then(() => {
                            
                            swal.fire(
                                'Deleted!',
                                'Your user has been deleted.',
                                'success'
                            )

                            Fire.$emit('ActionPerformed');

                        })
                        .catch(() => {
                            swal("Failed!", "There was something worng.", "warning");
                        });
                    }
                })
            },
        },

        created() {
            this.$Progress.start()
            this.loadStores();
            this.$Progress.finish()

            Fire.$on('ActionPerformed', () => {
                this.loadStores();
            });
        }
    }
</script>
