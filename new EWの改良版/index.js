//内部リンク時の処理---------------------------------------------------------------
$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得 
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//リセットボタンの処理-------------------------------------------------------------
function clearh	(){document.location.reload();}
function re		(){setInterval( clearh , 500);}

//------------------------------------------------------------------------------
console.log("javascriptは有効です");
let words =
 [
 ["agree","賛成する"],["oppose","反対する"],["advise","忠告する"],["tip","助言"],["discuss","ついて話し合う"],
 ["blame","責任があるとする"],["argue","主張する"],["claim","主張する"],["complain","文句を言う"],["offer","申し出る"],
 ["suggest","示唆する"],["recommend","推薦する"],["grateful","感謝している"],["apologize","謝る"],["excuse","言い訳をする"],
 ["celebrate","祝う"],["admire","感心する"],["impress","感銘を与える"],["award","賞"],["describe","説明する"],
 ["explain","説明する"],["communicate","意思疎通をはかる"],["express","表現する"],["promise","約束"],["information","情報"],
 ["technology","技術"],["research","研究"],["material","材料"],["artificial","人口的な"],["electric","電気の"],
 ["invent","発明する"],["discover","発見する"],["develop","発達する"],["skill","技術"],["ability","能力"],
 ["talent","才能"],["effort","努力"],["practice","練習"],["game","試合"],["achieve","達成する"],
 ["manage","何とかして〜する"],["improve","改善する"],["produce","生産する"],["create","創造する"],["establish","確立する"],
 ["save","手間を省く"],["medicine","薬"],["patient","患者"],["condition","状態"],["medical","医療の"],
 ["stress","ストレス"],["suffer","苦しむ"],["exercise","運動"],["breathe","呼吸する"],["thirsty","喉が渇いた"],
 ["physical","身体的な"],["fever","熱"],["strength","体力"],["tear","涙"],["taste","味がする"],
 ["rule","規則"],["role","役割"],["habit","習慣"],["custom","習慣"],["tradition","伝統"],
 ["society","社会"],["law","法律"],["ancestor","祖先"],["population","人口"],["native","母国の"],
 ["abroad","海外へ"],["local","地元の"],["survey","調査"],["evidence","証拠"],["value","価値"],
 ["treasure","財宝"],["fashion","流行"],["public","公共の"],["vote","投票"],["government","政府"],
 ["nation","国家"],["capital","首都"],["state","州"],["political","政治的な"],["price","価格"],
 ["cost","費用がかかる"],["sum","金額"],["budget","予算"],["fee","料金"],["fare","運賃"],
 ["bill","勘定"],["trade","貿易"],["wealth","冨"],["economy","経済"],["company","会社"],
 ["task","仕事"],["earn","稼ぐ"],["hurt","痛む"],["injure","痛める"],["damage","損害を与える"],
 ["destroy","破壊する"],["ruin","台無しにする"],["danger","危険"],["neighbor","近所の人"],["audience","観客"],
 ["crowd","群衆"],["author","著者"],["staff","職員"],["clerk","店員"],["customer","客"],
 ["passenger","乗客"],["elderly","年配の"],["female","女性の"],["head","向かう"],["follow","後についていく"],
 ["wander","歩き回る"],["travel","旅行する"],["pass","通り過ぎる"],["likely","しそうだ"],["natural","当然の"],
 ["certain","確かな"],["probably","おそらく"],["face","直面する"],["avoid","避ける"],["solve","解決する"],
 ["trouble","問題"],["issue","問題"],["cheer","声援を送る"],["encourage","促す"],["support","支持する"],
 ["prevent","妨げる"],["deny","否定する"],["enable","可能にする"],["succeed","成功する"],["miss","逃す"],
 ["fail","失敗する"],["mistake","間違い"],["check","調べる"],["hide","隠す"],["draw","描く"],
 ["join","加わる"],["throw","投げる"],["operate","操作する"],["repair","修理する"],["sew","縫う"],
 ["raise","上げる"],["serve","出す"],["pour","注ぐ"],["spill","こぼす"],["pretend","フリをする"],
 ["bahave","ふるまう"],["bear","耐える"],["explore","探検する"],["happen","起こる"],["appear","現れる"],
 ["remain","〜のままでいる"],["survive","生き残る"],["belong","所属している"],["represent","代表する"],["base","基礎を置く"],
 ["include","含む"],["contain","含む"],["own","自分自身の"],["share","共有する"],["collect","集める"],
 ["gather","集める"],["history","歴史"],["subject","教科"],["education","教育"],["knowledge","知識"],
 ["uniform","制服"],["grade","学年"],["senior","最上級生"],["graduate","卒業する"],["decide","決定する"],
 ["judge","判断する"],["quit","やめる"],["retire","引退する"],["review","再検討"],["choose","選ぶ"],
 ["imagine","想像する"],["guess","推測する"],["expect","予期する"],["predict","予測する"],["remember","覚えている"],
 ["remind","思い出させる"],["realize","理解する"],["appreciate","理解する"],["accept","受け入れる"],["consider","よく考える"],
 ["mind","気にする"],["wonder","〜かなとお思う"],["seem","〜のように思われる"],["compare","比較する"],["concentrate","集中する"],
 ["focus","焦点を当てる"],["allow","許可する"],["admit","認める"],["ground","地面"],["pollution","汚染"],
 ["sight","光景"],["view","眺め"],["landscape","風景"],["nature","自然"],["seed","種"],
 ["plant","植物"],["bloom","咲く"],["harvest","収穫"],["insect","昆虫"],["earthquake","地震"],
 ["temperature","温度"],["degree","度"],["flood","洪水"],["freeze","凍る"],["reflect","反射する"],
 ["polite","礼儀正しい"],["rude","無礼な"],["lonely","孤独な"],["lazy","怠惰な"],["strict","厳しい"],
 ["ugly","醜い"],["intelligent","知的な"],["silly","ばかな"],["nervous","あがって"],["awake","目を覚まして"],
 ["attitude","態度"],["character","性格"],["characteristic","特徴"],["feature","特徴"],["detail","詳細"],
 ["advantage","利点"],["fault","欠点"],["quality","質"],["correct","正確な"],["ideal","理想的な"],
 ["fair","公正な"],["appropriate","適切な"],["famous","有名な"],["elementary","初歩的な"],["major","主要な"],
 ["matter","重要である"],["bright","明るい"],["brilliant","輝いている"],["lively","生き生きとした"],["comfortable","快適な"],
 ["pleasant","楽しい"],["convenient","都合が良い"],["false","誤った"],["terrible","ひどい"],["awful","ひどい"],
 ["thin","薄い"],["tight","引き締まった"],["loose","ゆるい"],["raw","生の"],["empty","空の"],
 ["smooth","なめらかな"],["direct","直接的な"],["familiar","知られた"],["similar","似た"],["differ","異なる"],
 ["vary","さまざまだ"],["specific","特定の"],["common","普及した"],["unusual","珍しい"],["add","加える"],
 ["increase","増える"],["reduce","減らす"],["divide","分割する"],["count","数える"],["weigh","重さがある"],
 ["quarter","４分の１"],["lot","多くの"],["pile","積み重ね"],["rate","割合"],["figure","数字"],
 ["lack","不足"],["extra","余分な"],["ready","用意ができている"],["prepare","準備をする"],["adjust","慣れる"],
 ["apply","当てはまる"],["suit","適している"],["case","場合"],["scene","場面"],["chance","機会"],
 ["opportunity","機会"],["experience","経験"],["time","時間"],["spring","春"],["minute","分（時間の）"],
 ["period","時代"],["generation","世代"],["anniversary","記念日"],["recently","最近"],["used","以前は"],
 ["early","早く"],["first","第１の"],["latest","最新の"],["modern","現代の"],["latter","後半の"],
 ["spend","を費やす"],["delay","遅らせる"],["borrow","借りる"],["lend","貸す"],["rent","借りる"],
 ["provide","供給する"],["shelf","棚"],["board","板"],["garbage","ゴミ"],["item","品物"],
 ["wheel","車輪"],["note","メモ"],["present","プレゼント"],["stuff","もの"],["string","ひも"],
 ["leisure","余暇"],["diet","食事"],["furniture","家具"],["refrigerator","冷蔵庫"],["traffic","交通"],
 ["jam","渋滞"],["sell","売る"],["pay","支払う"],["wear","身につけている"],["clothes","服"],
 ["marry","結婚する"],["greet","挨拶する"],["order","注文する"],["room","部屋"],["story","階"],
 ["site","用地"],["yard","庭"],["bottom","底"],["line","列"],["row","列"],
 ["background","背景"],["direction","方向"],["art","芸術"],["culture","文化"],["cartoon","漫画"],
 ["novel","小説"],["instrument","楽器"],["tune","曲"],["sentence","文"],["article","記事"],
 ["passage","一節"],["vocabulary","語彙"],["rumor","うわさ"],["spell","つづる"],["pronounce","発音する"],
 ["sign","兆候"],["mean","意味する"],["publsh","出版する"],["display","展示する"],["trust", "信頼する"],
 ["depend", "次第である"], ["rely", "頼る"], ["pray", "祈る"], ["beg", "嘆願する"], ["prefer", "好む"],
 ["weep", "しくしく泣く"], ["hote", "嫌う"], ["worry", "心配をする"], ["anxious", "心配して"], ["satisfy", "満足させる"],
 ["annoy", "いらだたせる"], ["bother", "面倒をかける"], ["disturb", "迷惑をかける"], ["frighten", "おびえさせる"], ["upset", "動揺させる"],
 ["regret", "後悔する"], ["favor", "親切な行為"], ["interest", "関心"], ["pity", "残念なこと"], ["due", "が原因で"],
 ["reason", "理由"], ["result", "結果"], ["effect", "効果"], ["influence", "影響"], ["cause", "引き起こす"],
 ["affect", "影響を与える"], ["way", "方法"], ["manner", "方法"], ["purpose", "目的"], ["sake", "ため"],
 ["right", "ちょうど"], ["complete", "完全な"], ["hardly", "ほとんど〜ない"], ["nearly", "ほとんど"], ["partly", "ある程度"],
 ["actually", "実は"], ["indeed", "実際に"], ["even", "さえも"], ["exactly", "正確に"], ["gradually", "徐々に"],
 ["therefore", "それゆえに"], ["instead", "代わりに"], ["until", "〜まで"], ["besides", "〜に加えて"], ["except", "〜を除いて"]
 ];

 //もう一度ボタンーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
 function more ()
 {
   ok=		0;
   i=		0;
   result=	0;
   random=	0;
   i1=		0;
   answer=	0;
   select1=	0;
   select2=	0;
   num=		0;
   iq=		0;
   iq2=		0;
   random7=	0;
   push=	0;
   num7=   [];
   i9=		0;
   ver=		0;
   n = 		0;
   $("#check").	text("採点結果：〜〜〜〜〜〜〜〜〜");
   $("#PN").	text("正答率：〜％");
   $("#QN").	text("０問目：");
   $("#WN").	text("No."+"　　");
 }

//問題の範囲を選択ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var x = 0;
var y = 0;
$("#button3_0").click(function () { x = 1; 		y = 400;});
$("#button3_1").click(function () { x = 1; 		y =  70;});
$("#button3_2").click(function () { x = 71; 	y = 133;});
$("#button3_3").click(function () { x = 134; 	y = 188;});
$("#button3_4").click(function () { x = 189; 	y = 248;});
$("#button3_5").click(function () { x = 249; 	y = 299;});
$("#button3_6").click(function () { x = 300; 	y = 354;});
$("#button3_7").click(function () { x = 355; 	y = 400;});

//ボタンを押した時の処理ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var ques = question3;
$("#button2_0").click(function () {ques = question3;});
$("#button2_1").click(function () {ques = question2;});
$("#button2_2").click(function () {ques = question1;});

//採点ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let i = 0;
function checking ()
{
	if (i==0){
		i++;
		ques();
		$("#check").text("採点結果：〜〜〜〜〜〜〜〜〜");
	}else if (i==1) {
		i--;
		getValue();
	}
}

//キーボードの操作ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
function hoge(code)
{
	//エンターキー押下なら
	if(13 === code)
	{
		result = document.getElementById("form").value;
		checking();
	}
	if(32 === code)
	{
		event.preventDefault()
	}
}

//採点関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let ok=		0;
let result=	0;
let $check = 	$("#check");
let $PN = 		$("#PN");
function getValue()
{
	// value値を取得する
	result = document.getElementById("form").value;
	// 表示する
	if(result　==　answer)
	{
		ok++;
		$check.text("⭕️正解です");
		$PN.text("正答率：" + ((ok/i1)*100) +"　％");
	}else if(result !==　answer)
	{
		$check.text("❌"+"正解は　"+answer+"　です");
		$PN.text("正答率：" + ((ok/i1)*100) +"　％");
	}
}
//問題表示関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let random=	0;
let i1=		0;
let answer=	0;
let select1=0;
let select2=0;
let num=	0;
function select()
{
	select1=x;
	select2=y;
}

//問題を表示するランダム関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
function question1 (){
	i1++;
	select();
	alert1();
	num		=	select2-select1+1;
	random 	=	Math.floor( Math.random() * num)+select1-1;
	$("#QN").text(i1+"問目："+words[random][1]);
	$("#WN").text("No."+(random+1)+"　　");
	answer = words[random][0];
	document.form.reset();
}

//問題を順番に表示する関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let iq=0;
function question2 ()
{
	if(iq+select1>select2)
	{
		alert("選択範囲が終了しました。正答率は　　　"+((ok/i1)*100) +"％"+"でした。");
		return false;
	}
	alert1();
	select();
	let num2=iq+select1;
	iq++;
	i1++;
	$("#QN").text(i1+"問目："+words[num2-1][1]);
	$("#WN").text("No."+(num2)+"　　");
	answer = words[num2-1][0];
	document.form.reset();
}

//問題を重複なしにランダムに表示する関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let iq2=0;
function question3 (){
	select();
	num=select2-select1+1;
	iq2++;
	if(iq2+select1-1>select2)
	{
		alert("選択範囲が終了しました。正答率は　　　"+((ok/i1)*100) +"％"+"でした。"+"ページを更新してください。");
		return false;
	}
	alert1();
	i1++;
	norandom();
	$("#QN").text(i1+"問目："+words[random7][1]);
	$("#WN").text("No."+(random7+1)+"　　");
	answer = words[random7][0];
	document.form.reset();
}

//重複なしのランダム

let random7=0;
let push=	0;
let num7=  [];
let i9=		0;
let ver=	0;
let n = num7.length;
function norandom()
{
	randomnum();
	function randomnum()
	{
		push +=1
		random7 = Math.floor( Math.random() * num)+select1-1;
		for(i9=0 ; i9<=num7.length ; i9++)
		{
			if(num7.length==num)
			{
				return false;
			}
			if(num7[i9]==random7)
			{
				randomnum();
				return false;
			}
		}
		num7.push(random7);
	}
}

//アラートーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
function alert1()
{
	if(select1>select2)		{alert("範囲選択の数値に誤りがあります。左側の数値が右側の数値よりも大きくなっていませんか？");}
	if(select1>words.length){alert("最小値が選択可能範囲を超えています");}
	if(select2>words.length){alert("最大値が選択可能範囲を超えています");}
}

$("#r1").find(".button").click(function (){
	$("#r1").fadeOut(500);
	function Time(){
		$("#r2").fadeIn(1500);
	}
	setTimeout(Time(),500);
	
});

$("#r2").find(".button").click(function (){
	$("#r2").fadeOut(500);
	setTimeout(T2,500);
	function T2(){
		$("#r3").fadeIn(1500);
	}
});

$("#r3").find(".button").click(function (){
	$("#r3").fadeOut(500);
	setTimeout(T3,500);
	function T3(){
		$("#r7").fadeIn(1500);
	}
});
