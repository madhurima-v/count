count = 0
document.getElementsByTagName("img")[0].onclick = function () {
        count++
        if (count % 4 == 1) {
                document.getElementsByTagName("img")[0].classList.remove("rotate3")
                document.getElementsByTagName("img")[0].classList.add("rotate")
        }
        else if (count % 4 == 2) {
                document.getElementsByTagName("img")[0].classList.remove("rotate")
                document.getElementsByTagName("img")[0].classList.add("rotate1")
        }
        else if (count % 4 == 3) {
                document.getElementsByTagName("img")[0].classList.remove("rotate1")
                document.getElementsByTagName("img")[0].classList.add("rotate2")
        }

        else {
                document.getElementsByTagName("img")[0].classList.remove("rotate2")
                document.getElementsByTagName("img")[0].classList.add("rotate3")
        }

}

