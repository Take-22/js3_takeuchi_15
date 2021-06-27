// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDnQWu3iIQ1wtQaSqOSECb9zwN1l3KerCU",
    authDomain: "gsdemo-73ced.firebaseapp.com",
    projectId: "gsdemo-73ced",
    storageBucket: "gsdemo-73ced.appspot.com",
    messagingSenderId: "921699418572",
    appId: "1:921699418572:web:6bacd3ee477eb9b1ea9d69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Firebaseの為に別途追加
const ref = firebase.database().ref();

// _______________________________________
//キャラクターの定義
const regoshi = '<img src="./imgs/1.regoshi.png">';
const haru = '<img src="./imgs/2.haru.png">';
const rui = '<img src="./imgs/3.rui.png">';
const juno = '<img src="./imgs/4.juno.png">';
const jack = '<img src="./imgs/5.jack.png">';
const gohin = '<img src="./imgs/6.gohin.png">';
const mayor = '<img src="./imgs/7.mayor.png">';
const ibuki = '<img src="./imgs/8.ibuki.png">';
const flee = '<img src="./imgs/9.flee.png">';
const pina = '<img src="./imgs/10.pina.png">';
const rokume = '<img src="./imgs/11.rokume.png">';
const lizu = '<img src="./imgs/12.lizu.png">';

//役割取得：1=Dealer, 2=Carnivore, 3,4,5=Herbivore
const player_role = ["Dealer", "Carnivore", "Herbivore", "Herbivore", "Herbivore"];

//JASONの定義
let object = {
    yourname : "",
    character : "",
    role : ""
}

//キャラクターの選択をするとJSONに登録される
function onRadioButtonChange(){
    check_a = document.form1.image_a_input.checked;
    check_b = document.form1.image_b_input.checked;
    check_c = document.form1.image_c_input.checked;
    check_d = document.form1.image_d_input.checked;
    check_e = document.form1.image_e_input.checked;
    check_f = document.form1.image_f_input.checked;
    check_g = document.form1.image_g_input.checked;
    check_h = document.form1.image_h_input.checked;
    check_i = document.form1.image_i_input.checked;
    check_j = document.form1.image_j_input.checked;
    check_k = document.form1.image_k_input.checked;
    check_l = document.form1.image_l_input.checked;
    if(check_a == true){
        object.character = "regoshi";        
    }
    else if (check_b == true) {
        object.character = "haru";
    }
    else if (check_c == true) {
        object.character = "rui";
    }
    else if (check_d == true) {
        object.character = "juno";
    }
    else if (check_e == true) {
        object.character = "jack";
    }
    else if (check_f == true) {
        object.character = "gohin";
    }
    else if (check_g == true) {
        object.character = "mayor";
    }
    else if (check_h == true) {
        object.character = "ibuki";
    }
    else if (check_i == true) {
        object.character = "flee";
    }
    else if (check_j == true) {
        object.character = "pina";
    }
    else if (check_k == true) {
        object.character = "rokume";
    }
    else if (check_l == true) {
        object.character = "lizu";
    }

};

//名前とキャラクターを選択完了しデータベースに登録するアクション
$("#register").on("click",function(){
    const value = $("#yourname").val();
    if(value == ""){ //名前が入力されていなかったらエラー
        alert("Please type your name!");
        return false;    

    }else{ //名前が入力されたらmain画面に移動
        //各プレイヤーに役割を振分け
        const r = Math.floor(Math.random()*player_role.length);
        const role = player_role.splice(r,1);
        object.role = role[0];
        object.yourname = value;  
        ref.push(object); //サーバーに送信処理
    }
});

//ゲームに進む際のアクション
$("#gotochat").on("click",function(){
    const value = $("#yourname").val();
    if(value == ""){ //名前が入力されていなかったらエラー
        alert("Please type your name!");
        return false;

    }else{ //名前が入力されたらmain画面に移動
        // localStorageに入力した名前・キャラクター・役割を記憶
        object.yourname = value;
        localStorage.setItem("name",JSON.stringify(object));
        console.log(object); //確認用
    }
});

//Playerの参加人数
let array = []

//Playerの参加可能残り人数
let player = 5;

//firebaseにキャラクターが登録されたら表示
ref.on("child_added",function(data){
    const v = data.val(); //firebaseからオブジェクト変数を取得可能
    if(v.character == "regoshi"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+regoshi+'</div></li>')
        $("#image_a").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "haru"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+haru+'</div></li>')
        $("#image_b").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "rui"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+rui+'</div></li>')
        $("#image_c").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "juno"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+juno+'</div></li>')
        $("#image_d").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "jack"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+jack+'</div></li>')
        $("#image_e").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "gohin"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+gohin+'</div></li>')
        $("#image_f").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "mayor"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+mayor+'</div></li>')
        $("#image_g").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "ibuki"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+ibuki+'</div></li>')
        $("#image_h").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "flee"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+flee+'</div></li>')
        $("#image_i").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "pina"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+pina+'</div></li>')
        $("#image_j").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "rokume"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+rokume+'</div></li>')
        $("#image_k").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }if(v.character == "lizu"){
        $("#waiting").append('<li class="waiting_space"><div>'+v.yourname+'</div><div>'+lizu+'</div></li>')
        $("#image_l").empty(); //選択したキャラクターは使えなくする
        array.push("!");
        player--;
    }

    //残り参加人数の表示
    $("#count").html(player+" ");
    
    console.log(array.length);
    //5人揃ったらゲームスタート
    if(array.length == 5){
        $("#gotochat").append("Get ready!")
        $("#image_a").empty();
        $("#image_b").empty();
        $("#image_c").empty();
        $("#image_d").empty();
        $("#image_e").empty();
        $("#image_f").empty();
        $("#image_g").empty();
        $("#image_h").empty();
        $("#image_i").empty();
        $("#image_j").empty();
        $("#image_k").empty();
        $("#image_l").empty();
        $("#ppp").empty();
    }
});

// To do
//キャラクターを1つ選択しないとエラー(登録、gotochat)
//Jasonのデータを全消去する。
//readyの場所を調整