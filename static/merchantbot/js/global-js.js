$(document).ready(function(){
    $(".sub-menu").hide();
    $("#main-menu").change(function(){
        $(".sub-menu").hide();
        $("#" + $(this).val()).show();
        $("#link-message").html(""); // Limpa a mensagem quando o menu principal é alterado.
    });

    $(".sub-menu").change(function(){
        var selectedOption = $(this).val();
        switch (selectedOption) {
            case 'Adrinne':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://telegram.org/ target='_blank'>Telegram - Adrinne</a>"));
                break;
            case 'Aldebaran':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://telegram.org/' target='_blank'>Telegram - Aldebaran</a>"));
                break;
            // Continue com os outros casos aqui
        }
    });
});