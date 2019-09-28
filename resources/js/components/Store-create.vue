<template>
    <!-- Main content -->
    <div class="content">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Create Store</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item">
                                <router-link to="/stores">Stores</router-link >
                            </li>
                            <li class="breadcrumb-item active">Create Store</li>
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
                            <!-- Nav pills -->
                            <ul class="nav nav-pills">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="pill" href="#general">General</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#currency">Currency</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#payment-method">Payment Method</a>
                                </li>
                            </ul>
                        </div>
                          <!-- /.card-header -->
                          
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="tab-pane container active" id="general">
                                    <div class="col-md-8 offset-md-2 mt-3">
                                        <form @submit.prevent="createStore()">

                                            <div class="form-group row">
                                                <label for="name" class="col-sm-2 control-label">Store Name</label>
                                                <div class="col-sm-10">
                                                    <input type="text" v-model="form.name" class="form-control"
                                                        :class="{ 'is-invalid': form.errors.has('name') }" 
                                                        id="name" placeholder="Store Name" >
                                                    <has-error :form="form" field="name" ></has-error>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="code" class="col-sm-2 control-label">Store Code</label>
                                                <div class="col-sm-10">
                                                    <input type="text"  v-model="form.code" class="form-control" 
                                                        :class="{ 'is-invalid': form.errors.has('code') }" 
                                                        id="code" placeholder="Store Code">
                                                    <has-error :form="form" field="code" ></has-error>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="country" class="col-sm-2 control-label">Country</label>
                                                <div class="col-sm-10">
                                                    <multiselect v-model="form.country" :options="options" :class="{ 'is-invalid': form.errors.has('country') }"></multiselect>
                                                    <has-error :form="form" field="country" ></has-error>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="email" class="col-sm-2 control-label">Email</label>
                                                <div class="col-sm-10">
                                                    <input type="email" v-model="form.email" class="form-control" 
                                                        :class="{ 'is-invalid': form.errors.has('email') }"
                                                        id="email" placeholder="Email">

                                                    <has-error :form="form" field="email" ></has-error>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="phone" class="col-sm-2 control-label">Phone</label>
                                                <div class="col-sm-10">
                                                    <input type="phone" v-model="form.phone" class="form-control" 
                                                        :class="{ 'is-invalid': form.errors.has('phone') }"
                                                        id="phone" placeholder="Phone">

                                                    <has-error :form="form" field="phone" ></has-error>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="user" class="col-sm-2 control-label">User</label>
                                                <div class="col-sm-10">
                                                    <multiselect v-model="form.users" :options="userOptions" :multiple="true" :close-on-select="true" :clear-on-select="false" :preserve-search="true" placeholder="Select user for this shop" label="name" track-by="name" :preselect-first="true" :class="{ 'is-invalid': form.errors.has('users') }"></multiselect>

                                                    <has-error :form="form" field="user" ></has-error>
                                                </div>


                                                <label></label>
                                                  
                                            </div>

                                            <div class="form-group row">
                                                <div class="offset-sm-2 col-sm-2 mr-1">
                                                    <button type="submit" class="btn btn-success">
                                                        <i class="fas fa-check fa-fw"></i> Save Store
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                </div>
                                <!-- <div class="tab-pane container fade" id="currency">
                                    <div class="col-md-8 offset-md-2 mt-3">
                                        <div class="form-group row">
                                            <label for="name" class="col-sm-2 control-label">Store Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="name" placeholder="Store Name">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="code" class="col-sm-2 control-label">Store Code</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="code" placeholder="Store Code">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="country" class="col-sm-2 control-label">Country</label>
                                            <div class="col-sm-10">
                                                <multiselect v-model="value" :options="options"></multiselect>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="email" class="col-sm-2 control-label">Email</label>
                                            <div class="col-sm-10">
                                                <input type="email" class="form-control" id="email" placeholder="Email">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="phone" class="col-sm-2 control-label">Phone</label>
                                            <div class="col-sm-10">
                                                <input type="phone" class="form-control" id="phone" placeholder="Phone">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="offset-sm-2 col-sm-2 mr-1">
                                                <button type="submit" class="  btn btn-success">
                                                    <i class="fas fa-check fa-fw"></i> Save Store
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>  
                                </div>
                                <div class="tab-pane container fade" id="payment-method">
                                    <div class="col-md-8 offset-md-2 mt-3">
                                        
                                    </div>  
                                </div> -->
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>
<script>
    export default {

        data () {
            return {

                form: new Form({
                    id: '',
                    name: '',
                    code: '',
                    country:  '',
                    email: '',
                    phone: '',
                    users: ''
                }),

                value: '',
                options: [
                    'Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia, Plurinational State of', 'Bonaire, Sint Eustatius and Saba', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi'
                ],

                value: '',
                userOptions: [
                    
                ],

                

                
            }
        },

        methods:{

            getUsers(){
                axios.get('/api/user').then(({ data }) => (this.userOptions = data));
            },

            createStore(){
                this.$Progress.start();
                this.form.post('/api/store')
                .then(() => {
                    
                    toast.fire({
                        type: 'success',
                        title: 'Store created successfully!'
                    });
                    this.$Progress.finish();
                    this.$router.push('/stores')

                })
                .catch(() => {
                    this.$Progress.fail();
                });
            },
        },
        created() {
            this.$Progress.start()


            this.getUsers();

            this.$Progress.finish()

        }
    }
</script>
