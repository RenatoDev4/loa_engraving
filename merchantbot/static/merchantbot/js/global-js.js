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
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+bEkDgdInoCwzYjEx' target='_blank'>Telegram - Adrinne</a>"));
                break;
            case 'Aldebaran':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+dkOLqjZq94FiMGM5' target='_blank'>Telegram - Aldebaran</a>"));
                break;
            case 'Avesta':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+S_WPaKIpfkA4N2Yx' target='_blank'>Telegram - Avesta</a>"));
                break;
            case 'Azena':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+m3krAkttebpiYzIx' target='_blank'>Telegram - Azena</a>"));
                break;
            case 'Danube':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+9idJvJuQXxQ4ODAx' target='_blank'>Telegram - Danube</a>"));
                break;
            case 'Elzowin':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+ycUnlkL71ak2OGEx' target='_blank'>Telegram - Elzowin</a>"));
                break;
            case 'Galatur':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+oIdUcS0ouB4wY2Ux' target='_blank'>Telegram - Galatur</a>"));
                break;
            case 'Karta':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+zsbkAKwIfbhmMzMx' target='_blank'>Telegram - Karta</a>"));
                break;
            case 'Kharmine':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+s2idsqohsrQ5YTUx' target='_blank'>Telegram - Kharmine</a>"));
                break;
            case 'Ladon':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+DskpO6PRVa5kMjc5' target='_blank'>Telegram - Ladon</a>"));
                break;
            case 'Regulus':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+yC9SGqeHgohiYTkx' target='_blank'>Telegram - Regulus</a>"));
                break;
            case 'Sasha':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+W4k9vNYYDBM0NWQx' target='_blank'>Telegram - Sasha</a>"));
                break
            case 'Una':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+3Hepl2zaqAA3NDUx' target='_blank'>Telegram - Una</a>"));
                break;
            case 'Vykas':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+yhaflmIwy-oyMTcx' target='_blank'>Telegram - Vykas</a>"));
                break;
            case 'Zosma':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+uocQ1W64co40MGEx' target='_blank'>Telegram - Zosma</a>"));
                break;
            case 'Akkan':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+mqrn7uHQwj8xNzEx' target='_blank'>Telegram - Akkan</a>"));
                break;
            case 'Bergstrom':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+f3xJb5dujz02MThh' target='_blank'>Telegram - Bergstrom</a>"));
                break;
            case 'Enviska':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+owEokg0laR1lMjBh' target='_blank'>Telegram - Enviska</a>"));
                break;
            case 'Mari':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+Bji2aKAZx7dhNjFh' target='_blank'>Telegram - Mari</a>"));
                break;
            case 'Rohendel':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+vQE0TSZwLq01Zjcx' target='_blank'>Telegram - Rohendel</a>"));
                break;
            case 'Shandi':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+MjLeQZ8KhUxkZGZh' target='_blank'>Telegram - Shandi</a>"));
                break;
            case 'Valtan':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+y-F5Pa_Sg9pmYTlh' target='_blank'>Telegram - Valtan</a>"));
                break;
            case 'Antares':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+UspDa6KRiyRlZjFh' target='_blank'>Telegram - Antares</a>"));
                break;
            case 'Armen':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+e6e9Pff_1zhlZWIx' target='_blank'>Telegram - Armen</a>"));
                break;
            case 'Asta':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+YwSt4qXd8LxlYzRh' target='_blank'>Telegram - Asta</a>"));
                break;
            case 'Calvasus':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+y3R5TiipU-kwMzZh' target='_blank'>Telegram - Calvasus</a>"));
                break;
            case 'Evergrace':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+abTmEYOjzYE3Nzgx' target='_blank'>Telegram - Evergrace</a>"));
                break;
            case 'Ezrebet':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+tIMTPXJr23piODYx' target='_blank'>Telegram - Ezrebet</a>"));
                break;
            case 'Kadan':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+lVFxatGXryY1ODlh' target='_blank'>Telegram - Kadan</a>"));
                break;
            case 'Lazenith':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+pUcE8V1BZIgyMTY5' target='_blank'>Telegram - Lazenith</a>"));
                break;
            case 'Mokoko':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+ypY7oaQMPKw0YWFh' target='_blank'>Telegram - Mokoko</a>"));
                break;
            case 'Neria':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+kP3mJDPfnStlN2Qx' target='_blank'>Telegram - Neria</a>"));
                break;
            case 'Slen':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+9wJ3UgjpUfRmNjFh' target='_blank'>Telegram - Slen</a>"));
                break;
            case 'Thirain':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+0-HuTaXdQRY0MWRh' target='_blank'>Telegram - Thirain</a>"));
                break;
            case 'Trixion':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+71mn4vc7fFYxODIx' target='_blank'>Telegram - Trixion</a>"));
                break;
            case 'Wei':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+glgHBuuOYEM1YTcx' target='_blank'>Telegram - Wei</a>"));
                break;
            case 'Zinnervale':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+zD2Uo2cytWwwMWFh' target='_blank'>Telegram - Zinnervale</a>"));
                break;
            case 'Ealyn':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+WVFz8AbN87o4NGZh' target='_blank'>Telegram - Ealyn</a>"));
                break;
            case 'Nia':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+hAemJfr2ZjI0YTgx' target='_blank'>Telegram - Nia</a>"));
                break;
            case 'Kazeros':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+KUPXWxH9uQc0OTYx' target='_blank'>Telegram - Kazeros</a>"));
                break;
            case 'Arthetine':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+VBhK_okaG-g0ZTAx' target='_blank'>Telegram - Arthetine</a>"));
                break;
            case 'Blackfang':
                $("#link-message").html(gettext("Here is the link to your server's Telegram group: <br><br><a href='https://t.me/+I6CKFFW6atBjODZh' target='_blank'>Telegram - Blackfang</a>"));
                break;
            

        }
    });
});