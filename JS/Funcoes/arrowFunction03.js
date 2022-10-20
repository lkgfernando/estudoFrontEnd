let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)


const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let compraaComThisArrow = param => console.log(this === param)
compraaComThisArrow(global)
compraaComThisArrow(module.exports)