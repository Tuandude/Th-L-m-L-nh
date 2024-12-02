// Thay đổi nội dung búc thư ở đây
var letterContent =" Gửi Văn Phan Uyên Nhi.                                      Bà thật sự là tình đầu của tôi. Lần đầu tôi biết đc rằng thế nào là tình yêu, lần đầu biết thế nào là đc một cô gái quan tâm lo lắng cho ( ngoại trừ mẹ và chị) cảm động trước tình cảm đó. Lần đầu muốn đc che chở một người con gái mình yêu thật sự. Lần đầu thấy thế giới nó màu hồng thế. Lần đầu dc nắm tay đc ôm một người khác giới đc nhìn vào ánh mắt nhau và trao nhau nụ cười hạnh phúc. Tui bt đôi lúc tui trẻ con, cọc cằn nóng tính. Tui chs hay dỗi ( đặc điểm : nhanh hết dỗi )nhưng khi trêu người khác hay làm người khác bực khó chịu thì ko bao h xin lỗi hay chịu khó dỗ họ. Nhưng lần đầu chịu khó ngày nào cũng dỗ dành bà, công việc này tui ko khó chịu mà lại rất thích nó ( ko bt tại sao nữa chắc có lẽ bà đặc biệt với tui ). Nhiều lần tui hay làm bà buồn hay làm bà khóc, những lúc đó tui cuống cuồng ko bt làm gì :)) nhưng chẳng hiểu sao lại dỗ dc. Trước giờ toàn chs với con trai, chưa một lần chs thân với con gái, có thì chắc cũng xã giao thui nên tính tui hơi thẳng tại vì con trai với nhau nói thẳng ra cho nó bền. Lý do tui có thể chs một hội 3 đứa 17 năm. Hiện tại, có lẽ tui làm bà buồn quá nhiều mà bà buồn tui, hy vọng quá nhiều ở tui do những lời nói hão huyền mà tui nói ra. Nhưng nếu đc tui mong mình có thể làm lành và tui sẽ ít nói lại những cái hão huyền đó và hành động nhiều hơn                                                                  Ký Tên:                                                                     Đặng Văn Bảo Tuấn"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})