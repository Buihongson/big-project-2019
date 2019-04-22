
$(document).ready(function(){
	
	$('input[type=checkbox],input[type=radio],input[type=file]').uniform();
	
	$('select').select2();
	
	// Form Validation
    $("#basic_validate").validate({
		rules:{
			required:{
				required:true
			},
			email:{
				required:true,
				email: true
			},
			date:{
				required:true,
				date: true
			},
			url:{
				required:true,
				url: true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

	// Add producer validation
	$("#add_producer").validate({
		rules:{
			name_producer:{
				required:true
			},
			info_producer:{
				required:true,
			},
			tel_producer:{
				required:true,
			},
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

	// Add product validation
	$("#add_product").validate({
		rules:{
			parent_id:{
				required:true
			},
			name_product:{
				required:true
			},
			code_product:{
				required:true,
			},
			gender_product:{
				required:true,
			},
			glass_product:{
				required:true,
			},
			diameter_product:{
				required:true,
			},
			thickness_product:{
				required:true,
			},
			water_resistance_product:{
				required:true,
			},
			origin_product:{
				required:true,
			},
			price_product:{
				required:true,
				number:true
			},
			guarantee_product:{
				required:true,
			},
			status_product:{
				required:true,
			},
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

	// Add user validation
	$("#add_user").validate({
		rules:{
			user_name:{
				required:true
			},
			user_email:{
				required:true,
			},
			user_password:{
				required:true,
				minlength:6,
				maxlength:20
			},
			user_address:{
				required:true,
			},
			user_tel:{
				required:true,
			},
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	$("#number_validate").validate({
		rules:{
			min:{
				required: true,
				min:10
			},
			max:{
				required:true,
				max:24
			},
			number:{
				required:true,
				number:true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	$("#password_validate").validate({
		rules:{
			current_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			new_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			confirm_pwd:{
				required:true,
				minlength:6,
				maxlength:20,
				equalTo:"#new_pwd"
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

	$("#delProduct").click(function() {
		// alert('test');
		// if(confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
		// 	return true
		// }
		// return false;
		confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')
	});

	$("#delUser").on('click', function(e) {
		confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
	})
});

var delUser = document.getElementById('delUser');
delUser.addEventListener('click', delUser);

function delUser() {
	// alert('test');
	// if(confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
	// 	return true
	// }
	// return false;
	confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')
}
