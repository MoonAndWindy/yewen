function adjustFontSize() {
    var windowWidth = window.innerWidth; // 获取窗口宽度
    var fontSize = windowWidth/16; // 默认字体大小

    // 设置字体大小
    document.getElementById('logo').style.fontSize = fontSize + 'px';
}

// 在窗口大小改变时触发函数
window.onresize = function() {
    adjustFontSize();
};

// 页面加载完成时初始化字体大小
window.onload = function() {
    adjustFontSize();
};
