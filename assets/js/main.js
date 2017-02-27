/*
 * Custom Sweetalert
 */
//first time visit
swal({
    title: "Halooo",
    text : "Have a good day!",
    confirmButtonText: "oke deh"
});

//item onclick
function show_detail(id) {
    item = get_detail(id);
    console.log(item);
    swal({
      title: "<h3>" + item.title + "</h3>",
      text:
    //   "<img src='assets/images/"+ item.image +"' width=300> <br>" +
              "<p>"+ item.desc +"</p>",
      html: true,
      confirmButtonColor: "rgb(35, 204, 143)",
    });
}

//switch detail information
function get_detail(id){
    item = {};
    switch (id) {
        case 1:
            item.title = 'Code for a better world [Sticker]';
            item.desc  = 'Koding memang sulit, penuh tantangan, tapi selama agan percaya kalau ngoding punya kekuatan untuk merubah dunia jadi lebih baik, kita akan segera melihat hasilnya! Tersedia juga versi mini, pas untuk handphone <a href="https://www.tokopedia.com/stickerdev/code-for-a-better-world-man-mini-sticker" target="_blank"> disini </a>';
            item.image = 'code for a better world -man.png';

            break;
        case 2:
            item.title = 'Code for a better world [Sticker]';
            item.desc  = 'Dunia koding diisi dengan sebagian besar pria! Kalau aganwati adalah wanita dan percaya kalau ngoding punya kekuatan untuk merubah dunia jadi lebih baik, saatnya beraksi!';
            item.image = 'code for a better world -woman.png';
            break;
        case 3:
            item.title = 'Deep Work [Sticker]';
            item.desc = '"Deep Work" atau bekerja dengan fokus, skill yang mahal dan langka banget. Padahal kita bisa menghasilkan sesuatu yang jauh dari level sebelumnya. Dengarkan <a href="https://sekolahkoding.com/podcast/bekerja-dengan-fokus" target="_blank"> podcastnya disini </a>';
            item.image = 'deepwork.png';
            break;
        case 4:
            item.title = 'TextEditor + Coffe/Tea [Sticker]';
            item.desc = 'Kopi atau Teh? ngga perlu berantem, kita sediakan mug dan air panasnya, agan yang campur sendiri. Setelah itu lanjut ngoding!';
            item.image = 'terminal+mug.png';
            break;
        case 5:
            item.title = 'Work Hard and Be Nice [Sticker]';
            item.desc = 'Indonesia bukan hanya butuh orang pintar, tapi juga orang baik. Jadikan dua hal ini prinsip sehari-hari dan lihat keajaiban yang datang!';
            item.image = 'workhard&benice.jpg';
            break;
        case 6:
            item.title = 'Sekolah Koding! [Sticker]';
            item.desc = '❤ ❤ ❤ ❤ ❤ ❤';
            item.image = 'sekolahkoding.png';
            break;
        case 7:
            item.title = 'StickerDev [Sticker]';
            item.desc = 'Kami akan mempercantik dunia koding agan!';
            item.image = 'stickerdev.png';
            break;
        case 8:
            item.title = 'Stickerpack [Sticker]';
            item.desc = 'Kami akan mempercantik dunia koding agan dengan sticker sticker ini';
            item.image = 'pack1.png';
            break;
        case 9:
            item.title = 'Sekolahkoding chest logo [T-Shirt]';
            item.desc = 'Ke kampus atau ke kantor dengan t-shirt sekolah koding!';
            item.image = 'tshirt-sk-chest.png';
            break;
            default:
    }

    return item;
}
