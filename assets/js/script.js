$(document).ready(function () {
    $(document).on("click", ".anchorJs", function (e) {
        $("html,body")
            .stop()
            .animate({ scrollTop: $(".PointJs").offset().top }, 1000);
        e.preventDefault();
    });
});

// validation
(function ($) {
    $(function () {
        //empty validation
        $(document).on("blur", ".field-input.required", function (e) {
            $(this).removeClass("error");
            $(this).closest(".control-group").find(".validation_text").remove();
            if ($(this).val() == "") {
                $(this).addClass("error");
                $(this)
                    .closest(".control-group")
                    .append(
                        "<div class='validation_text'>This field is mandatory</div>"
                    );
            } else {
                $(this).removeClass("error");
                $(this)
                    .closest(".control-group")
                    .find(".validation_text")
                    .remove();
            }
        });

        // "Name" Text validation
        var namepattern = /^[A-Za-z ]{2,18}$/i;
        var name = $(".nameValid");
        $(document).on("blur", "input.nameValid", function () {
            if ($(this).val() != "") {
                if ($(this).val().search(namepattern) == 0) {
                    $(this).removeClass("error");
                    $(this)
                        .closest(".nameVilidBox")
                        .find(".validation_text")
                        .remove();
                } else {
                    $(this).addClass("error");
                    $(this)
                        .closest(".nameVilidBox")
                        .find(".validation_text")
                        .remove();
                    $(this)
                        .closest(".nameVilidBox")
                        .append(
                            "<div class='validation_text'>Incorrect name</div>"
                        );
                }
            } else {
                $(this).addClass("error");
                $(this)
                    .closest(".nameVilidBox")
                    .find(".validation_text")
                    .remove();
                $(this)
                    .closest(".nameVilidBox")
                    .append(
                        "<div class='validation_text'>This field is mandatory</div>"
                    );
            }
        });
        //mail validation
        var pattern =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        $(document).on("blur", 'input[type="email"]', function (e) {
            var email = $(this);
            console.log(email.val());
            $(this).removeClass("error");
            if ($(this).val() != "") {
                if ($(this).val().search(pattern) == 0) {
                    $(this).removeClass("error");
                    $(this)
                        .closest(".mailVilidBox")
                        .find(".validation_text")
                        .remove();
                } else {
                    $(this).addClass("error");
                    $(this)
                        .closest(".mailVilidBox")
                        .find(".validation_text")
                        .remove();
                    $(this)
                        .closest(".mailVilidBox")
                        .append(
                            "<div class='validation_text'>Incorrect email adress</div>"
                        );
                }
            } else {
                $(this).addClass("error");
                $(this)
                    .closest(".mailVilidBox")
                    .find(".validation_text")
                    .remove();
                $(this)
                    .closest(".mailVilidBox")
                    .append(
                        "<div class='validation_text'>This field is mandatory</div>"
                    );
            }
        });
        // "Phone" validation
        var phonepattern = /^[0-9 ]{2,18}$/i;
        var phone = $(".namePhone");
        $(document).on("blur", "input.namePhone", function () {
            if ($(this).val() != "") {
                if ($(this).val().search(namepattern) == 0) {
                    $(this).addClass("error");
                    $(this)
                        .closest(".phoneVilidBox")
                        .find(".validation_text")
                        .remove();
                    $(this)
                        .closest(".phoneVilidBox")
                        .append(
                            "<div class='validation_text'>Incorrect phone number</div>"
                        );
                } else {
                    $(this).removeClass("error");
                    $(this)
                        .closest(".phoneVilidBox")
                        .find(".validation_text")
                        .remove();
                }
            } else {
                $(this).addClass("error");
                $(this)
                    .closest(".phoneVilidBox")
                    .find(".validation_text")
                    .remove();
                $(this)
                    .closest(".phoneVilidBox")
                    .append(
                        "<div class='validation_text'>This field is mandatory</div>"
                    );
            }
        });

        //submit button
        $(".jsFormEmail").each(function () {
            $(document).on("click", ".form-btn", function (e) {
                //empty validation
                $(this)
                    .closest("form")
                    .find(".field-input.required")
                    .each(function () {
                        $(this).removeClass("error");
                        $(this)
                            .closest(".control-group")
                            .find(".validation_text")
                            .remove();
                        if ($(this).val() == "") {
                            $(this).addClass("error");
                            $(this)
                                .closest(".control-group")
                                .append(
                                    "<div class='validation_text'>This field is mandatory</div>"
                                );
                        } else {
                            $(this).removeClass("error");
                            $(this)
                                .closest(".control-group")
                                .find(".validation_text")
                                .remove();
                        }
                    });

                // "Name" Text validation
                $(this)
                    .closest("form")
                    .find(".nameValid")
                    .each(function () {
                        var name = $(".nameValid");
                        $(this).removeClass("error");
                        $(this)
                            .closest(".mailVilidBox")
                            .find(".validation_text")
                            .remove();
                        if ($(this).val() != "") {
                            if ($(this).val().search(namepattern) == 0) {
                                $(this).removeClass("error");
                                $(this)
                                    .closest(".nameVilidBox")
                                    .find(".validation_text")
                                    .remove();
                            } else {
                                $(this).addClass("error");
                                $(this)
                                    .closest(".nameVilidBox")
                                    .find(".validation_text")
                                    .remove();
                                $(this)
                                    .closest(".nameVilidBox")
                                    .append(
                                        "<div class='validation_text'>Incorrect name</div>"
                                    );
                            }
                        } else {
                            $(this).addClass("error");
                            $(this)
                                .closest(".nameVilidBox")
                                .find(".validation_text")
                                .remove();
                            $(this)
                                .closest(".nameVilidBox")
                                .append(
                                    "<div class='validation_text'>This field is mandatory</div>"
                                );
                        }
                    });

                //email validation
                $(this)
                    .closest("form")
                    .find('input[type="email"]')
                    .each(function () {
                        var email = $(this);
                        $(this).removeClass("error");
                        $(this)
                            .closest(".mailVilidBox")
                            .find(".validation_text")
                            .remove();
                        if ($(this).val() != "") {
                            if ($(this).val().search(pattern) == 0) {
                                $(this).removeClass("error");
                                $(this)
                                    .closest(".mailVilidBox")
                                    .find(".validation_text")
                                    .remove();
                            } else {
                                $(this).addClass("error");
                                $(this)
                                    .closest(".mailVilidBox")
                                    .find(".validation_text")
                                    .remove();
                                $(this)
                                    .closest(".mailVilidBox")
                                    .append(
                                        "<div class='validation_text'>Incorrect email adress</div>"
                                    );
                            }
                        } else {
                            $(this).addClass("error");
                            $(this)
                                .closest(".mailVilidBox")
                                .find(".validation_text")
                                .remove();
                            $(this)
                                .closest(".mailVilidBox")
                                .append(
                                    "<div class='validation_text'>This field is mandatory</div>"
                                );
                        }
                    });
                if ($(this).closest("form").find("input.error").length > 0) {
                    e.preventDefault();
                } else {
                    //console.log('send form')
                }

                // "Phone" validation
                $(this)
                    .closest("form")
                    .find(".namePhone")
                    .each(function () {
                        if ($(this).val() != "") {
                            if ($(this).val().search(namepattern) == 0) {
                                $(this).addClass("error");
                                $(this)
                                    .closest(".phoneVilidBox")
                                    .find(".validation_text")
                                    .remove();
                                $(this)
                                    .closest(".phoneVilidBox")
                                    .append(
                                        "<div class='validation_text'>Incorrect phone number</div>"
                                    );
                            } else {
                                $(this).removeClass("error");
                                $(this)
                                    .closest(".phoneVilidBox")
                                    .find(".validation_text")
                                    .remove();
                            }
                        } else {
                            $(this).addClass("error");
                            $(this)
                                .closest(".phoneVilidBox")
                                .find(".validation_text")
                                .remove();
                            $(this)
                                .closest(".phoneVilidBox")
                                .append(
                                    "<div class='validation_text'>This field is mandatory</div>"
                                );
                        }
                    });
            });
        });
    });
})(jQuery);
