function calculate(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi = weight / (height * height);
    let result;
    if(bmi > 0 && bmi < 15.0){
        result = 'Chỉ số BMI của bạn là: ' + bmi + '. Bạn Gầy độ 3. Ăn nhiều lênnnn !!!'
    }
    else if(bmi >= 15 && bmi < 16){
        result = 'Chỉ số BMI của bạn là: ' + bmi + '. Gầy cấp độ 1.  Ăn nhiều vào !!!'
    }
    else if(bmi >= 16 && bmi < 18.5){
        result = 'Chỉ số BMI của bạn là: ' + bmi + '. Thiếu cân. Ăn nhiều 1 chút'
    }
    else if (bmi >= 18.5 && bmi < 25.0){
        result = 'Chỉ số BMI của bạn là: ' + bmi + '. Bình thường, duy trì'
    }
    else if (bmi >= 25.0 && bmi < 30){
        result = 'Chỉ số BMI của bạn là: ' + bmi + '. Bạn thừa cân, ăn ít 1 chút'
    }
    else if (bmi >= 30 && bmi < 35.0){
        result = 'Chỉ số BMI của bạn là: ' + bmi + '. Béo phì độ I, ăn ít 1 chút'
    }
    else if (bmi >= 35.0 && bmi < 40.0){
        result = 'Chỉ số BMI của bạn là: ' + bmi + '. Béo phì độ II, ăn ít thôiii'
    }
    else{
        result = 'Chỉ số BMI của bạn là: ' + bmi + '. Béo phì độ III, béo quá r. Không muốn ngủm thì hốc ít thôi'
    }
        document.getElementById("result").innerText = result;
}