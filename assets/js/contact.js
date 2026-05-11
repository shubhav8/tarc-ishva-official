$(document).ready(function () {


    $('#contactus_modal').click(function () {
        $('#recorderror_modal').hide();
        $('#recorderror_modal').html('');
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var filter = /[0-9]{10}/;
        var leadName = $('#modal_name').val();
        var leadPhone = $('#modal_phone').val();
        var leadEmail = $('#modal_email').val();
        var leadMsg = $('#modal_msg').val();
        var formTitle = $('.modal-title').text();
        var utmSource = queryParams.utm_source || "Google";
        var utmMedium = queryParams.utm_medium;
        var utmCampaign = queryParams.utm_campaign;
        var utmTerm = queryParams.utm_term;
        var utmContent = queryParams.utm_content;
        var referrer = document.referrer;
        var userAgent = navigator.userAgent;
        var webUrl = document.baseURI;
        var deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
        if (leadName == "") {
            $('#modalerror_name').show(0).delay(5000).hide(0);
            return false;
        } else if (leadPhone == "" || !filter.test(leadPhone)) {
            $('#modalerror_mobile').show(0).delay(5000).hide(0);
            return false;
        } else if (leadEmail != '' && !pattern.test(leadEmail)) {
            $('#modalerror_email').show(0).delay(5000).hide(0);
            return false;
        }

        $('#contactus_modal').hide();
        $('.modalbuttonload').show();

        // var mobileNumber = itiModal.getNumber()
        var formData = {
            name: leadName,
            phone: '+91' + leadPhone,
            email: leadEmail,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent,
            vendor_remark: leadMsg,
            source: "website",
            score: "3",
            extra: {
                terms_conditions: "Agree",
                referrer: referrer,
                userAgent: userAgent,
                url: webUrl,
                deviceType: deviceType,
                formTitle: formTitle,
            },
        };

        var ecData = {
            "email": leadEmail,
            "phone_number": '+91' + leadPhone
        }

        window.dataLayer.push({
            'event': 'ec_form_submit',
            'ecData': ecData
        });


        var settings = {
            async: true,
            crossDomain: true,
            url: "https://lmsapi.persquarefeet.in/submit_lead/ac818521f6da4f27ac5bb9d138ae525b/4d7e9dda898d46548f674f8ebc4571cc",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            processData: false,
            data: JSON.stringify(formData)
        }
        $.ajax(settings).done(function (response) {
            var leadId = response.lms_id;
            if (queryParams.leadId == undefined) {
                (utmSource == undefined || utmSource == '') ? window.location = 'thank-you.html?leadId=' + leadId : window.location = 'thank-you.html?leadId=' + leadId + (window.location.href.includes('?') ? "&" + window.location.href.split('?')[1] : '');
            } else {
                var href = new URL(document.baseURI);
                href.searchParams.set('leadId', response.lms_id);
                var newUrl = href.toString().split('?')
                window.location = 'thank-you.html' + "?" + newUrl[1]
            }
            $('input').val('');
        }).fail(function (error) {
            console.log(error);
            $('#error-wrap').html(error.responseJSON.error);
            $('#recorderror_modal').html(error.responseJSON.error);
            $('#recorderror_modal').show();
            $('#contactus_modal').show();
            $('.modalbuttonload').hide();
            setTimeout(function () {
                $('#recorderror_modal').html('')
                $('#recorderror_modal').hide();
            }, 5000);
        });
    });


    $('#contactus_footer').click(function () {
        $('#recorderror_footer').hide();
        $('#recorderror_footer').html('');
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var filter = /[0-9]{10}/;
        var leadName = $('#footer_name').val();
        var leadPhone = $('#footer_phone').val();
        var leadEmail = $('#footer_email').val();
        var utmSource = queryParams.utm_source || "Google";
        var utmMedium = queryParams.utm_medium;
        var utmCampaign = queryParams.utm_campaign;
        var utmTerm = queryParams.utm_term;
        var utmContent = queryParams.utm_content;
        var referrer = document.referrer;
        var userAgent = navigator.userAgent;
        var webUrl = document.baseURI;
        var deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
        if (leadName == "") {
            $("#footer_name").addClass("error");
            $("#footer_name").on('keyup', function (e) {
                if ($(this).val().length != 0) {
                    $("#footer_name").removeClass("error");
                } else {
                    $("#footer_name").addClass("error");
                }
            });
            return false
        } else if (leadPhone == "" || !filter.test(leadPhone)) {
            $("#footer_phone").addClass("error");
            $("#footer_phone").on('keyup', function (e) {
                if ($(this).val().length != 0) {
                    $("#footer_phone").removeClass("error");
                } else {
                    $("#footer_phone").addClass("error");
                }
            });
            return false
        } else if (leadEmail != '' && !pattern.test(leadEmail)) {
            $("#footer_email").addClass("error");
            $("#footer_email").on('keyup', function (e) {
                if ($(this).val().length != 0) {
                    $("#footer_email").removeClass("error");
                } else {
                    $("#footer_email").addClass("error");
                }
            });
            return false
        }

        $('#contactus_footer').hide();
        $('.ftbuttonload').show();

        // var mobileNumber = itiFooter.getNumber()

        formData = {
            name: leadName,
            phone: '+91' + leadPhone,
            email: leadEmail,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent,
            source: "website",
            score: "3",
            extra: {
                terms_conditions: "Agree",
                referrer: referrer,
                userAgent: userAgent,
                url: webUrl,
                deviceType: deviceType,
                formTitle: "contactus_Footer"
            },
        };

        var ecData = {
            "email": leadEmail,
            "phone_number": '+91' + leadPhone
        }

        window.dataLayer.push({
            'event': 'ec_form_submit',
            'ecData': ecData
        });

        var settings = {
            async: true,
            crossDomain: true,
            url: "https://lmsapi.persquarefeet.in/submit_lead/ac818521f6da4f27ac5bb9d138ae525b/4d7e9dda898d46548f674f8ebc4571cc",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            processData: false,
            data: JSON.stringify(formData)
        }
        $.ajax(settings).done(function (response) {
            var leadId = response.lms_id;
            if (queryParams.leadId == undefined) {
                (utmSource == undefined || utmSource == '') ? window.location = 'thank-you.html?leadId=' + leadId : window.location = 'thank-you.html?leadId=' + leadId + (window.location.href.includes('?') ? "&" + window.location.href.split('?')[1] : '');
            } else {
                var href = new URL(document.baseURI);
                href.searchParams.set('leadId', response.lms_id);
                var newUrl = href.toString().split('?')
                window.location = 'thank-you.html' + "?" + newUrl[1]
            }
            $('input').val('');
        }).fail(function (error) {
            console.log(error);
            $('#error-wrap').html(error.responseText.error)
            $('#recorderror_footer').html(error.responseJSON.error)
            $('#recorderror_footer').show();
            $('#contactus_footer').show();
            $('.ftbuttonload').hide();
            setTimeout(function () {
                $('#recorderror_footer').html('')
                $('#recorderror_footer').hide();
            }, 5000);
        });
    });

    $('#contactus_side').click(function () {
        $('#recorderror_side').hide();
        $('#recorderror_side').html('');
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var filter = /[0-9]{10}/;
        var leadName = $('#side_name').val();
        var leadPhone = $('#side_phone').val();
        var leadEmail = $('#side_email').val();
        var leadMsg = $('#side_msg').val();
        var utmSource = queryParams.utm_source || "Google";
        var utmMedium = queryParams.utm_medium;
        var utmCampaign = queryParams.utm_campaign;
        var utmTerm = queryParams.utm_term;
        var utmContent = queryParams.utm_content;
        var referrer = document.referrer;
        var userAgent = navigator.userAgent;
        var webUrl = document.baseURI;
        var deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
        if (leadName == "") {
            $('#sideerror_name').show(0).delay(5000).hide(0);
            return false;
        } else if (leadPhone == "" || !filter.test(leadPhone)) {
            $('#sideerror_mobile').show(0).delay(5000).hide(0);
            return false;
        } else if (leadEmail != '' && !pattern.test(leadEmail)) {
            $('#sideerror_email').show(0).delay(5000).hide(0);
            return false;
        }

        $('#contactus_side').hide();
        $('.sidebuttonload').show();

        // var mobileNumber = itiSide.getNumber()
        var formData = {
            name: leadName,
            phone: '+91' + leadPhone,
            email: leadEmail,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent,
            source: "website",
            score: "3",
            extra: {
                terms_conditions: "Agree",
                message: leadMsg,
                referrer: referrer,
                userAgent: userAgent,
                url: webUrl,
                deviceType: deviceType,
                formTitle: "Get Directions on WhatsApp"
            },
        };

        var ecData = {
            "email": leadEmail,
            "phone_number": '+91' + leadPhone
        }

        window.dataLayer.push({
            'event': 'ec_form_submit',
            'ecData': ecData
        });

        var settings = {
            async: true,
            crossDomain: true,
            url: "https://lmsapi.persquarefeet.in/submit_lead/ac818521f6da4f27ac5bb9d138ae525b/4d7e9dda898d46548f674f8ebc4571cc",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            processData: false,
            data: JSON.stringify(formData)
        }
        $.ajax(settings).done(function (response) {
            var leadId = response.lms_id;
            if (queryParams.leadId == undefined) {
                (utmSource == undefined || utmSource == '') ? window.location = 'thank-you.html?leadId=' + leadId : window.location = 'thank-you.html?leadId=' + leadId + (window.location.href.includes('?') ? "&" + window.location.href.split('?')[1] : '');
            } else {
                var href = new URL(document.baseURI);
                href.searchParams.set('leadId', response.lms_id);
                var newUrl = href.toString().split('?')
                window.location = 'thank-you.html' + "?" + newUrl[1]
            }
            $('input').val('');
        }).fail(function (error) {
            console.log(error);
            $('#error-wrap').html(error.responseJSON.error)
            $('#recorderror_side').html(error.responseJSON.error)
            $('#recorderror_side').show();
            $('#contactus_side').show();
            $('.sidebuttonload').hide();
            setTimeout(function () {
                $('#recorderror_side').html('')
                $('#recorderror_side').hide();
            }, 5000);
        });
    });

    $('#contactus_banner').click(function () {
        $('#recorderror_banner').hide();
        $('#recorderror_banner').html('');
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var filter = /[0-9]{10}/;
        var leadName = $('#banner_name').val();
        var leadPhone = $('#banner_phone').val();
        var leadEmail = $('#banner_email').val();
        var leadCheckBox = $('#banner_checkbox').is(":checked");
        var utmSource = queryParams.utm_source || "Google";
        var utmMedium = queryParams.utm_medium;
        var utmCampaign = queryParams.utm_campaign;
        var utmTerm = queryParams.utm_term;
        var utmContent = queryParams.utm_content;
        var referrer = document.referrer;
        var userAgent = navigator.userAgent;
        var webUrl = document.baseURI;
        var deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

        if (leadName == "") {
            $("#banner_name").addClass("error");
            $("#banner_name").on('keyup', function (e) {
                if ($(this).val().length != 0) {
                    $("#banner_name").removeClass("error");
                } else {
                    $("#banner_name").addClass("error");
                }
            });
            return false;
        } else if (leadPhone == "" || !filter.test(leadPhone)) {
            $("#banner_phone").addClass("error");
            $("#banner_phone").on('keyup', function (e) {
                if ($(this).val().length != 0) {
                    $("#banner_phone").removeClass("error");
                } else {
                    $("#banner_phone").addClass("error");
                }
            });
            return false
        } else if (leadEmail != "" && !pattern.test(leadEmail)) {
            $("#banner_email").addClass("error");
            $("#banner_email").on('keyup', function (e) {
                if ($(this).val().length != 0) {
                    $("#banner_email").removeClass("error");
                } else {
                    $("#banner_email").addClass("error");
                }
            });
            return false
        } else if (!leadCheckBox) {
            $("#bannerCheckbox_error").show();
            setTimeout(() => {
                $("#bannerCheckbox_error").hide();
            }, 1000);
            return false
        }
        $('#contactus_banner').hide();
        $('.bannerbuttonload').show();

        // var mobileNumber = itiBanner.getNumber()
        var formData = {
            name: leadName,
            phone: '+91' + leadPhone,
            email: leadEmail,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent,
            source: "website",
            score: "3",
            extra: {
                referrer: referrer,
                userAgent: userAgent,
                url: webUrl,
                deviceType: deviceType
            },
        };

        var ecData = {
            "email": leadEmail,
            "phone_number": '+91' + leadPhone
        }

        window.dataLayer.push({
            'event': 'ec_form_submit',
            'ecData': ecData
        });



        var settings = {
            async: true,
            crossDomain: true,
            url: "https://lmsapi.persquarefeet.in/submit_lead/ac818521f6da4f27ac5bb9d138ae525b/4d7e9dda898d46548f674f8ebc4571cc",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            processData: false,
            data: JSON.stringify(formData)
        }
        $.ajax(settings).done(function (response) {
            var leadId = response.lms_id;
            if (queryParams.leadId == undefined) {
                (utmSource == undefined || utmSource == '') ? window.location = 'thank-you.html?leadId=' + leadId : window.location = 'thank-you.html?leadId=' + leadId + (window.location.href.includes('?') ? "&" + window.location.href.split('?')[1] : '');
            } else {
                var href = new URL(document.baseURI);
                href.searchParams.set('leadId', response.lms_id);
                var newUrl = href.toString().split('?')
                window.location = 'thank-you.html' + "?" + newUrl[1]
            }
            $('input').val('');
        }).fail(function (error) {
            console.log(error);
            $('#error-wrap').html(error.responseJSON.error)
            $('#recorderror_banner').html(error.responseJSON.error)
            $('#recorderror_banner').show();
            $('#contactus_banner').show();
            $('.bannerbuttonload').hide();
            setTimeout(function () {
                $('#recorderror_banner').html('')
                $('#recorderror_banner').hide();
            }, 5000);
        });
    });

});




$('.condition-label').mouseover(function () {
    $('.check-box').css('display', "block");
    $('.check-box').css('position', "absolute");
    $('.check-box').css('transition', 'all 1.5s ease')
    $('.check-box').css('-webkit-transition', 'all 1.5s ease')
});
$('.condition-label').mouseout(function () {
    $('.check-box').css('display', "none");
    $('.check-box').css('transition', 'all 1.5s ease')
    $('.check-box').css('-webkit-transition', 'all 1.5s ease')
});

$('.sidecondition-label').mouseover(function () {
    $('.sidecheck-box').css('display', "block");
    $('.sidecheck-box').css('position', "absolute");
    $('.sidecheck-box').css('transition', 'all 1.5s ease')
    $('.sidecheck-box').css('-webkit-transition', 'all 1.5s ease')
});
$('.sidecondition-label').mouseout(function () {
    $('.sidecheck-box').css('display', "none");
    $('.sidecheck-box').css('transition', 'all 1.5s ease')
    $('.sidecheck-box').css('-webkit-transition', 'all 1.5s ease')
});




function modalInput() {
    let input1 = document.getElementById('modal_name').value.trim();
    let input2 = document.getElementById('modal_phone').value.length;
    let input3 = document.getElementById('modal_checkbox').checked;
    let submitBtn = document.getElementById('contactus_modal');

    if (input1 !== '' && input2 == '10' && input3) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
}

function footerInput() {
    let input1 = document.getElementById('footer_name').value.trim();
    let input2 = document.getElementById('footer_phone').value.length;
    let input3 = document.getElementById('footer_checkbox').checked;
    let submitBtn = document.getElementById('contactus_footer');

    if (input1 !== '' && input2 == '10' && input3) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
}
function sideInput() {
    let input1 = document.getElementById('side_name').value.trim();
    let input2 = document.getElementById('side_phone').value.length;
    let input3 = document.getElementById('side_checkbox').checked;
    let submitBtn = document.getElementById('contactus_side');

    if (input1 !== '' && input2 == '10' && input3) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
}





$('.nav-item').on('click', function () {
    $('#navbarSupportedContent').removeClass('show');
    $('.navbar-toggler').addClass('collapsed');
})
$('#nav-menu li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
})
$('.navbar-toggler, .nav-item').on('click', function () {
    if ($(".navbar-toggler").hasClass("collapsed")) {
        $('body').removeClass('overflow-hidden');
    } else {
        $('body').addClass('overflow-hidden');
    }
})
$('.enquireModal').on('click', function (e) {
    e.stopPropagation();
    const target = $(e.currentTarget);
    const heading = target.attr('data-name');
    $('.modal-title').html(heading);
})

