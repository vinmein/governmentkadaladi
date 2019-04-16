$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        // feedbackIcons: {
        //     valid: 'glyphicon glyphicon-ok',
        //     invalid: 'glyphicon glyphicon-remove',
        //     validating: 'glyphicon glyphicon-refresh'
        // },        
        fields: {
            name: {
             message: 'The first name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The first name can only accept alphabetical input'
                    },
                }
            },
            gender:{
                message: 'gender is not valid',
                validators: {
                    notEmpty: {
                        message: 'Gender is required and cannot be empty'
                    },
                    stringLength: {
                        min: 4,
                        max: 12,
                        message: 'Gender must be more than 3 and less than 12 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'Gender can only consist of alphabetical characters'
                    },
                }

            },      
           dob: {
            message: 'Date of Birth is not valid',
                validators: {
                    notEmpty:{
                        message: 'The Date of birth is required and cannot be empty'},
            
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            phone: {
                message: 'Contact Number is not valid',
                validators: {
                    notEmpty: {
                        message: 'Contact Number is required and cannot be empty'
                    }
                }
            }, 
            address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    }
                }
            }, 
            degree: {
                message: 'Degree is not valid',
                validators: {
                    notEmpty: {
                        message: 'Degree is required and cannot be empty'
                    }
                }
            }, 
            branch: {
                message: 'Department is not valid',
                validators: {
                    notEmpty: {
                        message: 'Department is required and cannot be empty'
                    }
                }
            }, 
            year: {
                message: 'Year of Completion is not valid',
                validators: {
                    notEmpty: {
                        message: 'Year is required and cannot be empty'
                    }
                }
            }, 
            status: {
                message: 'Status is not valid',
                validators: {
                    notEmpty: {
                        message: 'Status Field is required and cannot be empty'
                    }
                }
            }, 

        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbyJd5sTrOAxbrA7rl7W9zysDqWUtkpsKwXn42n7nx1QppRh0H0/exec';
        // var redirectUrl = 'success-page.html';
        // show the loading 
        // $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            // $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    // $(location).attr('href',redirectUrl);                
                }
            });
    });
});