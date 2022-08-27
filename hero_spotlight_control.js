const hero_img = document.querySelector(".hero_spotlight_img");
const hero_button = document.querySelectorAll(".hero_icon_button");
const spotlight_name = document.querySelector(".hero_spotlight_name");
const spotlight_info = document.querySelector(".hero_spotlight_info");

const character_array = [
    "D.VA", "她運用之前身為職業電競選手的高超技術，駕駛韓國最先進的機甲來保護家園。",
    "半藏", "蓋世無雙的弓箭能手，身懷絕世暗殺技藝。",
    "卡西迪", "這名四處亡命的快槍手以他自己的方式來伸張正義。",
    "壁壘機兵", "這具可變形戰鬥機械人，探索著這個世界。它為大自然深深著迷，但是內心卻提防著人類。",
    "士兵76", "沒人能阻止這名神秘的正義使者揭發造成捍衛者解散的幕後真相。",
    "奪命女", "完美的刺客：她充滿耐心、無情，而且乾淨俐落，從不為所做所為感到一絲後悔。",
    "安娜", "經過多年蟄伏，這位捍衛者戰士重返紛亂的世界，保護新的一代。",
    "小美", "能夠控制氣候的專家，她為了以一己之力保護自然環境而奮戰。",
    "巴帝斯特", "配有各式實驗治療裝置的菁英戰地醫護兵。",
    "席格馬", "在一場於外太空進行的實驗出了差錯後，性格古怪的天體物理學家就此成為了活體武器。",
    "慈悲", "她不僅是醫術高超的醫療人員及聰明的醫學研究者，同時也是和平的忠實擁護者。",
    "托比昂", "這位技藝高超的工匠，能夠在戰場上製作出武器。",
    "攔路豬", "殘暴的殺手，因為恣意肆虐的暴力行為而惡名昭彰。",
    "札莉雅", "世界最強的女子運動選手，為了保護祖國，毅然決定犧牲個人榮耀。",
    "歐瑞莎", "捍衛和平的防禦機器人，負責保護努巴尼人民的安危。",
    "死神", "這名無情的殺手，在獵殺前捍衛者成員。",
    "毀滅拳王", "這個戰略家使用他的聰明才智、個人魅力與野蠻力量來打造一個更強大的世界。",
    "法拉", "戰功彪炳的軍人，身著猛禽戰鬥服在空中巡視。",
    "源氏", "這名身懷致命絕招的生化機械忍者，在接受他的機械身體之後，重拾內心的寧靜。",
    "溫斯頓", "這隻受過基因工程改造、智力超絕的猩猩，是優秀的科學家，也是代表著人類潛能的一位勇士。",
    "火爆鋼球", "這架機甲是由一隻受過基因工程改造、來自月球的倉鼠所駕駛。",
    "炸彈鼠", "這個炸彈狂所到之處滿是混亂和毀滅。",
    "碧姬", "這名裝甲戰士畢生都在尋求冒險。有機會的話，也樂於援助需要幫助的人。",
    "禪亞塔", "具有高度智能的智械僧侶，在世上漫遊，尋找靈魂昇華之道。",
    "艾西", "亡鎖幫的首領，率領眾人在美國西南部一帶為非作歹。",
    "莫伊拉", "這名聰明絕頂的基因科學家不在乎道德方面的譴責，只為了追求科學上的進展。",
    "萊因哈特", "一名信守古代騎士道榮耀、正義與勇氣的勇士。",
    "路西歐", "享譽國際的名人，他用音樂和行動來鼓舞社會大眾。",
    "辛梅塔", "這名建築師能夠藉由操控硬化光粒結構來打造出一個完美有秩序的社會。",
    "迴音", "迴音是劃時代的機器人，她的人工智慧可以快速適應環境，象徵著人類文明最先進的科技。",
    "閃光", "前捍衛者成員，她是名能進行時空跳躍的冒險家，也是一股難以抵擋的善良力量。",
    "駭影", "惡名昭彰的駭客，喜歡打探秘密，並利用這些秘密換取力量。"
];

for (let i = 0; i < hero_button.length; i++) {
    hero_button[i].addEventListener("mouseover", () => {
        hero_img.removeAttribute("class");
        hero_img.classList.add("hero_" + i);
        spotlight_name.innerHTML = character_array[2 * i];
        spotlight_info.innerHTML = character_array[2 * i + 1];
    });
}