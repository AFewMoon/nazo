var body = document.body;
var root = document.documentElement;
var lnk = document.getElementsByClassName("lnk");
var background = document.getElementsByClassName("background")[0];
var quote = document.getElementsByClassName("quote")[0];
var container = document.getElementsByClassName("container")[0];
var title = document.getElementsByClassName("title")[0];
var title_container = document.getElementsByClassName("title-container")[0];
var line_container = document.getElementsByClassName("line-container")[0];
var content_container = document.getElementsByClassName("content-container")[0];

var Sentences = new Array(
    "与其诅咒黑暗，不如点亮烛光",
    "Think twice, code once.",
    "我们擦身而过，为了相识或者遗忘",
    "你还有好多未完成的梦，你有什么理由停下脚步",
    "既然认准这条路，何必去打听要走多久",
    "心之所向，素履以往",
    "给时光以生命，给岁月以文明",
    "给岁月以文明，而不是给文明以岁月",
    "碑是那么小，与其说是为了纪念，更像是为了忘却",
    "人做过的，神都记着",
    "像墓碑一样简洁",
    "这一刻，沧海桑田",
    "众星因你，皆降为尘",
    "你的无畏来源于无知",
    "夜晚的灯塔一直都在，只是灯亮的时候，你才看见它",
    "空不是无，空是一种存在，你得用空这种存在填满自己",
    "欢迎加入，现在我们是同志了",
    "无言是最大的轻蔑",
    "我们都是阴沟里的虫子，但总还是得有人仰望星空",
    "大自然真是自然的吗？",
    "值得获取的东西，就在风险的彼岸",
    "人类最高级别的安慰，就是理解别人的痛苦，并陪伴他",
    "窗外的每一片树叶，都使人类的科学显得那么幼稚无力",
    "我不去想是否能够成功，既然选择了远方，便只顾风雨兼程",
    "我殚精竭虑，只为度过平凡的一生",
    "来了，爱了，给了她一颗星星，走了",
    "sqrt(-1) love you",
    "我爱你，与你有何相干？毁灭你，又与你有何相干？",
    "要么孤独，要么庸俗",
    "时光之外，即为永恒",
    "迷途漫漫，终有一归",
    "凛冬散尽，星河长明",
    "Just sudo it!",
    "Go for I.T.",
    "要多想");
// exceed: 首先他们会忽略你，接着他们会嘲笑你，然后他们会打你，最后他们会输给你。

function getObjHeight(obj) {
    return obj.offsetHeight;
}

function getObjWidth(obj) {
    return obj.offsetWidth;
}

function getObjProperty(name) {
    return getComputedStyle(root).getPropertyValue(name).trim();
}

function setObjProperty(name, data) {
    root.style.setProperty(name, data);
}

function removeBack(str, len) {
    return str.substr(0, str.length - len);
}

function move() {
    quote.setAttribute('class', 'quote move');
    line_container.setAttribute('class', 'line-container move');
    title_container.setAttribute('class', 'title-container move');
    background.setAttribute('class', 'background move');
    for (var i = 0; i < lnk.length; i++)
        lnk[i].setAttribute("class", "lnk move");
}

function moveback() {
    quote.setAttribute('class', 'quote');
    line_container.setAttribute('class', 'line-container');
    title_container.setAttribute('class', 'title-container');
    background.setAttribute('class', 'background');
    for (var i = 0; i < lnk.length; i++)
        lnk[i].setAttribute("class", "lnk");
}

function display() {
    background.style["opacity"] = 1;
    container.style["opacity"] = 1;
    container.setAttribute("onmouseover", "move();");
    container.setAttribute("onmouseout", "moveback();");
}

var container_width_property_raw = getObjProperty('--container-width');
var container_width_property = removeBack(container_width_property_raw, 1) / 100;
var container_height_property_raw = getObjProperty('--container-height');
var container_height_property = removeBack(container_height_property_raw, 1) / 100;

function check() {
    var document_height = getObjHeight(body);
    var document_width = getObjWidth(body);
    var title_height = getObjHeight(title);
    var title_width = getObjWidth(title);
    var container_height = getObjHeight(container);
    var container_width = getObjWidth(container);

    // calc container width
    if (container_width_property * document_width < title_width * 1.1)
        setObjProperty('--container-width', title_width * 1.1 + 'px');
    else
        setObjProperty('--container-width', container_width_property_raw);

    // calc container height
    if (container_height_property * document_height < container_height * 1.2)
        setObjProperty('--container-height', container_height * 1.2 + 'px');
    else
        setObjProperty('--container-height', container_height_property_raw);

    setObjProperty('--a-lnk-total-size', getObjHeight(lnk[0]) + 'px');
    setObjProperty('--total-container-hight', container_height + 'px');
    setObjProperty('--total-height', title_height + getObjHeight(line_container) + getObjHeight(content_container) + 'px');
}

function getQuote() {
    var total = 35;
    var randomNum = Math.floor(Math.random() * total);
    quote.innerHTML = Sentences[randomNum];
}

window.onresize = check;

getQuote();
check();