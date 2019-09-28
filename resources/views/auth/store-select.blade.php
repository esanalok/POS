@extends('layouts.auth')

@section('content')
<div class="row justify-content-center login-page">
    <div class="col-md-4">
        <div class="login-logo">
            <b>LaraPOS</b>
        </div>
        <div class="card">
            <div class="card-header">Select Store</div>

            <div class="card-body">
            	<form method="POST" action="{{ route('login.store.select') }}">
                    @csrf

                    @foreach($stores as $key => $store)

                    	<div class="small-box bg-success">
			              	<div class="inner">
			                	<h4>{{ ucfirst($store->name) }}</h4>
			              	</div>
			              	<div class="icon">
			                	<i class="fas fa-shopping-cart"></i>
			              	</div>
			              	<button type="submit" value="{{ $store->id }}" name="store" class="small-box-footer store-select">
			                	More info <i class="fas fa-arrow-circle-right"></i>
			              	</button>
			            </div>
                    	
                    @endforeach
		        </form>
            </div>
        </div>
    </div>
</div>
@endsection