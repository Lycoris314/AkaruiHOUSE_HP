$(() => {

    //TOPへ戻るボタン
    $(window).on("scroll", () => {

        if ($("html").scrollTop() > 700) {

            $("#back_to_top").css("z-index", "999");
            $("#back_to_top").css("opacity", "1");

        } else {
            $("#back_to_top").css("opacity", "0")
            //0.5sかけてopacityを1にするので、0.5s後にz-indexを-999にする。
            setTimeout(()=>{
                if($("html").scrollTop() <= 700){
                    $("#back_to_top").css("z-index", "-999");
                }
            },500);                

        }
    });

    $("#back_to_top").on("click", () => {

        $("html").animate(
            { scrollTop: 0 }, 500
        );
    });



    const bar1 = $(".hamburbar:nth-child(1)"),
        bar2 = $(".hamburbar:nth-child(2)"),
        bar3 = $(".hamburbar:nth-child(3)");

    $("#to_nav").on("click", toNav);

    function toNav() {

        $("#to_nav").off("click");

        $(".hamburbar").on("click", back);

        //アイコン変形
        bar2.css("opacity", 0);

        bar1.css("background-color", "white")
            .css("rotate", "-315deg")
            .css("translate", "0 10px");

        bar3.css("background-color", "white")
            .css("rotate", "315deg")
            .css("translate", "0 -10px");

        //メニュー出現
        $("#dark_back").css("display", "block");
        $("#white_back").css("left", "0")
            .css("opacity", "1");

    }


    //メニューから戻る

    $("#dark_back").on("click", back);

    function back() {


        setTimeout(() => {
            $("#to_nav").on("click", toNav);
        }, 10);

        $(".hamburbar").off("click");

        //アイコン変形
        bar2.css("opacity", 1);

        bar1.css("background-color", "black")
            .css("rotate", "0deg")
            .css("translate", "0");

        bar3.css("background-color", "black")
            .css("rotate", "0deg")
            .css("translate", "0");

        //背景を戻す
        $("#dark_back").css("display", "none");
        $("#white_back").css("left", "-300px")
            .css("opacity", "0");
    }
});

