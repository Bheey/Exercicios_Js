function clickar(){
    var ano = new Date()
    var data = ano.getFullYear()
    var idade = document.getElementById(`naci`)
    var res = document.getElementById(`hxh`)
    var sex = document.getElementsByName(`Sexo`)
    var soma = data - Number(idade.value)
    var genero = ''
    const photo = document.getElementById('foto')
    photo.style.width = '300px'
    photo.style.height = '300px'

    if (sex[0].checked){
        genero = 'Homem'
        if(soma <= 0){
            window.alert ('Preencha os dados.')
            photo.src = 'https://imgs.search.brave.com/VWgol6GY_1orlmB-ABCI1gJHok_rqYzo2kGkBU7nejg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmV0b3Jlcy1wcmVt/aXVtL21lbnNhZ2Vt/LWRlLWF2aXNvLWRl/LWVycm8tamFuZWxh/LWRhLWludGVyZmFj/ZS1kby11c3Vhcmlv/LWlsdXN0cmFjYW8t/ZGUtYWxlcnRhLWRl/LXZpcnVzXzE1Nzk0/My00MDIuanBnP3Np/emU9NjI2JmV4dD1q/cGc'
        }

        else if(soma > 0 && soma <10){
            photo.src = 'https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            res.innerHTML = `Voçê e ${genero} com ${soma} anos.`

        }else if(soma <= 27){
            photo.src = 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            res.innerHTML = `Voçê e ${genero} com ${soma} anos.`

        }else if(soma <= 50){
            photo.src = 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            res.innerHTML = `Voçê e ${genero} com ${soma} anos.`

        }else if(soma < 100){
            photo.src = 'https://images.pexels.com/photos/1652340/pexels-photo-1652340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            res.innerHTML = `Voçê e ${genero} com ${soma} anos.`
        }else{
             window.alert ('Preencha os dados.')
            photo.src = 'https://imgs.search.brave.com/VWgol6GY_1orlmB-ABCI1gJHok_rqYzo2kGkBU7nejg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmV0b3Jlcy1wcmVt/aXVtL21lbnNhZ2Vt/LWRlLWF2aXNvLWRl/LWVycm8tamFuZWxh/LWRhLWludGVyZmFj/ZS1kby11c3Vhcmlv/LWlsdXN0cmFjYW8t/ZGUtYWxlcnRhLWRl/LXZpcnVzXzE1Nzk0/My00MDIuanBnP3Np/emU9NjI2JmV4dD1q/cGc'
        }
    }
    if(sex[1].checked){
        genero = 'Mulher'
        if(soma <= 0){
            window.alert ('Preencha os dados.')
            photo.src = 'https://imgs.search.brave.com/VWgol6GY_1orlmB-ABCI1gJHok_rqYzo2kGkBU7nejg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmV0b3Jlcy1wcmVt/aXVtL21lbnNhZ2Vt/LWRlLWF2aXNvLWRl/LWVycm8tamFuZWxh/LWRhLWludGVyZmFj/ZS1kby11c3Vhcmlv/LWlsdXN0cmFjYW8t/ZGUtYWxlcnRhLWRl/LXZpcnVzXzE1Nzk0/My00MDIuanBnP3Np/emU9NjI2JmV4dD1q/cGc'
        }
        if(soma > 0 && soma < 10){
            photo.src = 'https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            res.innerHTML = `Voçê e ${genero} com ${soma} anos.`

        }else if(soma <= 27){
            photo.src = 'https://images.pexels.com/photos/29462200/pexels-photo-29462200/free-photo-of-cosplay-de-anime-vibrante-em-buenos-aires.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'   
            res.innerHTML = `Voçê e ${genero} com ${soma} anos.`

        }else if(soma <= 50){
            photo.src = 'https://images.pexels.com/photos/3445218/pexels-photo-3445218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            res.innerHTML = `Voçê e ${genero} com ${soma} anos.`

        }else if(soma <= 100){
            photo.src = 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            res.innerHTML = `Voçê e ${genero} com ${soma} anos.`
        }else{
            window.alert ('Preencha os dados.')
            photo.src = 'https://imgs.search.brave.com/VWgol6GY_1orlmB-ABCI1gJHok_rqYzo2kGkBU7nejg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmV0b3Jlcy1wcmVt/aXVtL21lbnNhZ2Vt/LWRlLWF2aXNvLWRl/LWVycm8tamFuZWxh/LWRhLWludGVyZmFj/ZS1kby11c3Vhcmlv/LWlsdXN0cmFjYW8t/ZGUtYWxlcnRhLWRl/LXZpcnVzXzE1Nzk0/My00MDIuanBnP3Np/emU9NjI2JmV4dD1q/cGc'
       }
    }
    res.appendChild(photo)
}
