function header(rootDir) {
    $.ajax({
        url: rootDir + "../include/header.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            $(".headerContainer").html(html);
        }
    });
}

function footer(rootDir) {
    $.ajax({
        url: rootDir + "../include/footer.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            $(".footerContainer").html(html);
        }
    });
}

function sidebar(rootDir) {
    $.ajax({
        url: rootDir + "../include/sidebar.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            $(".sidebarContainer").html(html);
        }
    });
}

function headerArchive(rootDir) {
    $.ajax({
        url: rootDir + "../include/headerArchive.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            $(".headerArchiveContainer").html(html);
        }
    });
}