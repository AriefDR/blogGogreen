document.getElementById('subs').addEventListener('click', () => {
    let emailSubs = document.getElementById('emailSubs')
    if (emailSubs.value == "" || emailSubs.value == null) {
        alert("email anda kosong")
    } else if (emailSubs.value.length < 5) {
        alert("charkater anda terlalu pendek kurang dari 5")
    } else if (emailSubs.value.length > 25) {
        alert("charkater anda terlalu panjang melebihi dari 25")
    } else if (emailSubs.value.indexOf("@") == -1) {
        alert("format email anda salah")
    } else {
        alert("Success")
        emailSubs.value = ""
    }
})