(function ($) {
    /**
     * XPS functions
     * @type {{submitHandler: (function(*=): boolean)}}
     */
    const XPS = {
        // 
        btnLoading: 'button.btn-loading',

        href: function () {
            $('.xps-href').on('click', function () {
                window.location.href = $(this).attr('data-href');
            });
            $('.href-click').on('click', function () {
                window.location.href = $(this).find('a').attr('href');
            });
        },
    };

    // Glide
    // if ($('#pele').length) {
    //     var glide = new Glide('#pele', {
    //         type       : 'slide',
    //         perView    : 6,
    //         gap    : 8,
    //         focusAt    : 'left',
    //     });
    //     glide.mount()
    // }
    // if ($('#objeto').length) {
    //     var glide = new Glide('#objeto', {
    //         type       : 'slide',
    //         perView    : 6,
    //         gap    : 8,
    //         focusAt    : 'left',
    //     });
    //     glide.mount()
    // }
    // if ($('#roupa').length) {
    //     var glide = new Glide('#roupa', {
    //         type       : 'slide',
    //         perView    : 6,
    //         gap    : 8,
    //         focusAt    : 'left',
    //     });
    //     glide.mount()
    // }
    // if ($('#cabelo').length) {
    //     var glide = new Glide('#cabelo', {
    //         type       : 'slide',
    //         perView    : 6,
    //         gap    : 8,
    //         focusAt    : 'left',
    //     });
    //     glide.mount()
    // }

    $('#colorpick').colorpicker({ component: '.btn', color: '#f7f7f7', customClass: 'colorpicker-2x', sliders: { saturation: { maxLeft: 200, maxTop: 200 }, hue: { maxTop: 200 }, alpha: { maxTop: 200 } } });

    // Criando variáveis de cores para alteração de capa de fundo.
    var urlBase = "assets/images/";
    var productBase = "cases/"
    var celBase = "iphone7plus"
    var colorBase = "/cores/";
    var colorDef = "azul";
    
    //var imgBase = "/base1.webp";
    $('#def-color-img').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base1.webp"); 
        $('#def-color-img2').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base2.webp");
        $('#def-color-img3').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base3.webp");
        $('#def-color-img4').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base4.webp");

    $('.cel-azul').on('click', function (e) { 
        var colorDef = "azul"; 
        $('#def-color-img').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base1.webp"); 
        $('#def-color-img2').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base2.webp");
        $('#def-color-img3').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base3.webp");
        $('#def-color-img4').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base4.webp");
    });
    $('.cel-vermelho').on('click', function (e) { 
        var colorDef = "vermelho"; 
        $('#def-color-img').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base1.webp"); 
        $('#def-color-img2').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base2.webp");
        $('#def-color-img3').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base3.webp");
        $('#def-color-img4').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base4.webp");
    });
    $('.cel-preto').on('click', function (e) { 
        var colorDef = "preto"; 
        $('#def-color-img').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base1.webp"); 
        $('#def-color-img2').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base2.webp");
        $('#def-color-img3').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base3.webp");
        $('#def-color-img4').prop('src', urlBase + productBase + celBase + colorBase + colorDef + "/base4.webp");
    });

    // Customizando fonte e tamanho
    $(document).ready(function () {        
        $('#selectfont').focusout(function () {
            var fontText = $('#selectfont').val();
            var fontSize = $('#selectsize').val();
            $('.custom-text').css('font-family', fontText).css('font-size', fontSize).css('line-height', fontSize);
        });
        $('#selectsize').focusout(function () {
            var fontText = $('#selectfont').val();
            var fontSize = $('#selectsize').val();
            $('.custom-text').css('font-family', fontText).css('font-size', fontSize).css('line-height', fontSize);
        });

        // Acionando elemento de texto em preview
        $('.insertText').click(function () {
            var customText = $('#customtext').val();
            var colorPicker = $('#colorpickerdef').val();
            $('.custom-text').html(customText);
            $('.custom-text').css('color', colorPicker);
        });
        $().css('transform', 'translate(125px, 421px)');
        $('#customtext').focusout(function () {
            var customText = $('#customtext').val();
            var colorPicker = $('#colorpickerdef').val();
            $('.custom-text').html(customText);
            $('.custom-text').css('color', colorPicker);
        });
        $("#colorpick i").blur(function(){
            alert("rolou");
            var colorPicker = $('#colorpickerdef').val();
            $('.custom-text').css('color', colorPicker);
        });
    });

    // Função para adicionar classe no header quando fizer o scroll
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 50) {
            $('#header').addClass('custom-header');
        } else {
            $('#header').removeClass('custom-header');
        }
    });
    $(document).ready(function () {
        var getWidth = $('.imagearea').width();
        $('.imagearea img').css('width', getWidth);
    });
    $(document).ready(function () {
        $('.btnmais').click(function(){
            var aumentarImgwidth = $('.img-upload-max img').width();
            aumentarImgwidth = aumentarImgwidth + 10;
            $('.img-upload-max img').css('width', aumentarImgwidth);
        });
        $('.btnmenos').click(function(){
            var aumentarImgwidth = $('.img-upload-max img').width();
            aumentarImgwidth = aumentarImgwidth - 10;
            $('.img-upload-max img').css('width', aumentarImgwidth);
        });

        /* TODO - PEGA POSIÇÃO DA IMAGEM NO PRIMEIRO THUMB E COLOCA IGUAL NAS DEMAIS - REMOVER DEPOIS DE TESTAR */
        $('.preview-thumbnail li').click(function(){
            var positionX = $('.imagearea img').attr("data-x");
            var positionY = $('.imagearea img').attr("data-y");
            $('.imagearea img').attr("data-y", positionY);
            $('.imagearea img').attr("data-x", positionX);

            $('.imagearea img').css('transform', 'translate('+ positionX + 'px, ' + positionY + 'px)');
            
        });
    });

    var img = new Image();
    img.src = localStorage.theImage;
    $('.imagearea').html(img);
    $("body").on("change", ".classhere", function () {
        var fileInput = $(this)[0];
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = new Image();
            img.src = reader.result;
            localStorage.theImage = reader.result;
            $(".imagearea").html(img);
            $(".imagearea img").addClass('draggable');
            $(".imagearea img").addClass('resize-drag');
        }
        reader.readAsDataURL(file);
    });
    $('.clearstorage').click(function (){
        $('.imagearea img').prop('src', '');
    });
    


    // TODO- Criando lista de estudo. Criar código otimizado e remover este.
    $(document).ready(function () {
        //PELE
        $('.pele-1').on('click', function (e) {$('.pele img').prop('src', 'assets/images/characters/professions/pele/pele1.png'); });
        $('.pele-2').on('click', function (e) {$('.pele img').prop('src', 'assets/images/characters/professions/pele/pele2.png'); });
        $('.pele-3').on('click', function (e) {$('.pele img').prop('src', 'assets/images/characters/professions/pele/pele3.png'); });
        $('.pele-4').on('click', function (e) {$('.pele img').prop('src', 'assets/images/characters/professions/pele/pele4.png'); });
        $('.pele-5').on('click', function (e) {$('.pele img').prop('src', 'assets/images/characters/professions/pele/pele5.png'); });

        //OBJETO
        $('.objeto-1').on('click', function (e) {$('.objeto img').prop('src', 'assets/images/characters/professions/objeto/livros.png'); });
        $('.objeto-2').on('click', function (e) {$('.objeto img').prop('src', 'assets/images/characters/professions/objeto/notebook.png'); });
        $('.objeto-3').on('click', function (e) {$('.objeto img').prop('src', 'assets/images/characters/professions/objeto/papeis.png'); });
        $('.objeto-4').on('click', function (e) {$('.objeto img').prop('src', 'assets/images/characters/professions/objeto/prancheta.png'); });

        //ROUPA
        $('.roupa-1').on('click', function (e) {$('.roupa img').prop('src', 'assets/images/characters/professions/roupa/roupa1.png'); });
        $('.roupa-2').on('click', function (e) {$('.roupa img').prop('src', 'assets/images/characters/professions/roupa/roupa2.png'); });
        $('.roupa-3').on('click', function (e) {$('.roupa img').prop('src', 'assets/images/characters/professions/roupa/roupa3.png'); });
        $('.roupa-4').on('click', function (e) {$('.roupa img').prop('src', 'assets/images/characters/professions/roupa/roupa4.png'); });
        $('.roupa-5').on('click', function (e) {$('.roupa img').prop('src', 'assets/images/characters/professions/roupa/roupa5.png'); });
        $('.roupa-6').on('click', function (e) {$('.roupa img').prop('src', 'assets/images/characters/professions/roupa/roupa6.png'); });
        $('.roupa-7').on('click', function (e) {$('.roupa img').prop('src', 'assets/images/characters/professions/roupa/roupa7.png'); });
        $('.roupa-8').on('click', function (e) {$('.roupa img').prop('src', 'assets/images/characters/professions/roupa/roupa8.png'); });

        //CABELO
        $('.cabelo-1').on('click', function (e) {$('.cabelo img').prop('src', 'assets/images/characters/professions/cabelo/cabelo-claro/0001.png'); });
        $('.cabelo-2').on('click', function (e) {$('.cabelo img').prop('src', 'assets/images/characters/professions/cabelo/cabelo-claro/0002.png'); });
        $('.cabelo-3').on('click', function (e) {$('.cabelo img').prop('src', 'assets/images/characters/professions/cabelo/cabelo-claro/0003.png'); });
        $('.cabelo-4').on('click', function (e) {$('.cabelo img').prop('src', 'assets/images/characters/professions/cabelo/cabelo-escuro/0001.png'); });
        $('.cabelo-5').on('click', function (e) {$('.cabelo img').prop('src', 'assets/images/characters/professions/cabelo/cabelo-escuro/0002.png'); });
        $('.cabelo-6').on('click', function (e) {$('.cabelo img').prop('src', 'assets/images/characters/professions/cabelo/cabelo-escuro/0003.png'); });
        $('.cabelo-7').on('click', function (e) {$('.cabelo img').prop('src', 'assets/images/characters/professions/cabelo/cabelo-ruivo/0001.png'); });
        $('.cabelo-8').on('click', function (e) {$('.cabelo img').prop('src', 'assets/images/characters/professions/cabelo/cabelo-ruivo/0002.png'); });
        $('.cabelo-9').on('click', function (e) {$('.cabelo img').prop('src', 'assets/images/characters/professions/cabelo/cabelo-ruivo/0003.png'); });
    });

    $(document).ready(function () {
        $('.tab-pessoal').click(function () {
            $('.custompersonal').addClass('active');
            $('.customcharacters').removeClass('active');
        });
        $('.tab-personagens').click(function () {
            $('.customcharacters').addClass('active');
            $('.custompersonal').removeClass('active');
        });
    });

    XPS.href();
})(jQuery);