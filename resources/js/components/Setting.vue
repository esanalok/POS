<template>
    <!-- Main content -->
    <div class="content">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Settings</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Settings</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
        
            <div class="row">
                <div class="col-md-12 mt-2">

                    <div class="card ">
                        <div class="card-header">Settings</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 col-sm-6 col-12">
                                    <router-link to="/stores" class="settings_item">
                                        <div class="info-box">
                                            <span class="info-box-icon bg-info bg-info-setting">
                                                <i class="fas fa-store"></i>
                                            </span>

                                          <div class="info-box-content">
                                            <span class="info-box-text">Stores</span>
                                            <span class="info-box-number">1,410</span>
                                          </div>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-3 col-sm-6 col-12">
                                    <router-link to="/brands" class="settings_item">
                                        <div class="info-box">
                                            <span class="info-box-icon bg-info bg-info-setting">
                                                <i class="fas fa-grip-horizontal"></i>
                                            </span>

                                          <div class="info-box-content">
                                            <span class="info-box-text">Brands</span>
                                            <span class="info-box-number">1,410</span>
                                          </div>
                                        </div>
                                    </router-link>
                                </div>

                                <div class="col-md-3 col-sm-6 col-12">
                                    <router-link to="/boxes" class="settings_item">
                                        <div class="info-box">
                                            <span class="info-box-icon bg-info bg-info-setting ">
                                                <i class="fas fa-box"></i>
                                            </span>

                                          <div class="info-box-content">
                                            <span class="info-box-text">Boxes</span>
                                            <span class="info-box-number">1,410</span>
                                          </div>
                                        </div>
                                    </router-link>
                                </div>

                                <div class="col-md-3 col-sm-6 col-12">
                                    <router-link to="/units" class="settings_item">
                                        <div class="info-box">
                                            <span class="info-box-icon bg-info bg-info-setting ">
                                                <i class="fas fa-balance-scale"></i>
                                            </span>

                                          <div class="info-box-content">
                                            <span class="info-box-text">Units</span>
                                            <span class="info-box-number">1,410</span>
                                          </div>
                                        </div>
                                    </router-link>
                                </div>

                                <div class="col-md-3 col-sm-6 col-12">
                                    <a href="" class="settings_item">
                                        <div class="info-box">
                                            <span class="info-box-icon bg-info bg-info-setting ">
                                                <i class="fas fa-percentage"></i>
                                            </span>

                                          <div class="info-box-content">
                                            <span class="info-box-text">Tax Rates</span>
                                            <span class="info-box-number">1,410</span>
                                          </div>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-md-3 col-sm-6 col-12">
                                    <a href="" class="settings_item">
                                        <div class="info-box">
                                            <span class="info-box-icon bg-info bg-info-setting ">
                                                <i class="fas fa-money-bill-wave-alt"></i>
                                            </span>

                                          <div class="info-box-content">
                                            <span class="info-box-text">Currencies</span>
                                            <span class="info-box-number">1,410</span>
                                          </div>
                                        </div>
                                    </a>
                                </div>


                                <div class="col-md-3 col-sm-6 col-12">
                                    <a href="" class="settings_item">
                                        <div class="info-box">
                                            <span class="info-box-icon bg-info bg-info-setting ">
                                                <i class="fas fa-wallet"></i>
                                            </span>

                                          <div class="info-box-content">
                                            <span class="info-box-text">Payment Method</span>
                                            <span class="info-box-number">1,410</span>
                                          </div>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-md-3 col-sm-6 col-12">
                                    <a href="" class="settings_item">
                                        <div class="info-box">
                                            <span class="info-box-icon bg-info bg-info-setting ">
                                                <i class="fas fa-barcode"></i>
                                            </span>

                                          <div class="info-box-content">
                                            <span class="info-box-text">Barcode Settings</span>
                                            <span class="info-box-number">1,410</span>
                                          </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
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
