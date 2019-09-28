<template>
    <!-- Main content -->
    <div class="content">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Boxes</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Boxes</li>
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
                            <h3 class="card-title">Boxes</h3>

                            <div class="card-tools">
                                <button class="btn btn-success"><i class="fa fa-plus fa-fw"></i> Add New Box</button>
                            </div>
                        </div>
                          <!-- /.card-header -->
                          
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Brand Name</th>
                                        <th>Total Products</th>
                                        <th>Note</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Amazon</td>
                                        <td>12</td>
                                        <td>This is brand note</td>
                                        <td><span class="badge bg-primary">Active</span></td>
                                        <td>
                                            <a href="#" class="action-btn btn-primary">
                                                <i class="fas fa-edit blue"></i>
                                            </a>
                                            <a href="#" class="action-btn btn-danger">
                                                <i class="fa fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
    export default {
        mounted() {
            this.$Progress.start()
            this.$Progress.finish()
        }
    }
</script>
