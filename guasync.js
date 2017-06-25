
/*
 同步和异步编程的概念

 同步的意思是 函数通过返回值来传递数据
 函数从获取数据一直到返回数据之间的时间一直在等待

 异步的意思是 函数通过回调函数的方式来传递获取的数据
 函数执行后立刻就返回了, 数据获取成功后, 调用回调函数并传递参数
 */

var fs = require('fs')

var log = console.log.bind(console, '---')

// 我们先写入文件
// 写入成功后 读取当前目录看是否有这个文件
// 如果有这个文件, 我们读取文件的内容并打印出来
// 然后我们删除这个文件
var filename = 'message.txt'
console.log('写入前')
fs.writeFile(filename, '你好 Node.js', (err) => {
    fs.readdir('.', function(err, files){
        console.log('读取文件成功 files', files)
        if(files.includes(filename)) {
            fs.readFile(filename, (err, data) => {
                // 读取文件成功, 打印并删除文件, data 并不是 string 而是一个 Buffer 对象(以后会讲)
                console.log('读取成功', data)
                fs.unlink(filename, (err) => {
                    console.log(`最后一步, 文件 ${filename} 成功删除`)
                })
            })
        }
    })
})
console.log('写入函数调用后')

var guasync = function(callback) {
    // setTimeout 函数一定会把第一个参数放到后台去执行
    setTimeout(function() {
        callback()
    }, 0)
}

var processFiles = function() {
    var filename = 'guasync.txt'
    log('同步写入前')
    fs.writeFileSync(filename, '你好 同步 api')
    var files = fs.readdirSync('.')
    console.log('读取文件成功 files', files)
    if(files.includes(filename)) {
        var data = fs.readFileSync(filename)
        console.log('读取成功', data)
        fs.unlinkSync(filename)
        console.log(`最后一步, 文件 ${filename} 成功删除`)
    }
    log('同步写入完成后')
}


// http://www.kuaidadi.com/assets/js/animate.js
guasync(function () {
    processFiles()
})
log('干点别的事情')

// guasync(function() {
//     step1()
//     step2()
// })


var log = console.log.bind(console)

var ajax = function(request) {
    /*
     request 是一个 object, 有如下属性
     method, 请求的方法, string
     url, 请求的路径, string
     data, 请求发送的数据, 如果是 GET 方法则没这个值, string
     callback, 响应回调, function

     本题不会就放弃, 本题带了一个用法在下方
     */
    var data = null
    var r = new XMLHttpRequest()
    r.open(request.method, request.url, false)
    r.setRequestHeader('Content-Type', request.contentType)
    r.onreadystatechange = function(event) {
        if(r.readyState === 4) {
            log('ajax 状态 4 准备执行 callback')
            data = r.response
            // request.callback(r.response)
        }
    }
    if (request.method === 'GET') {
        r.send()
    } else {
        r.send(request.data)
    }
    return data
}

var request = {
    method: 'GET',
    url: 'https://vip.cocode.cc/sandbox/todo/3400711034/all',
    callback: function (r) {
        log('响应完成 callback')
    }
}

var guasync = function(callback) {
    // setTimeout 函数一定会把第一个参数放到后台去执行
    setTimeout(function() {
        callback()
    }, 0)
}

guasync(function() {
    log('ajax 开始')
    var data = ajax(request)
    log('ajax 结束', data)
})

log('guasync 结束')
