function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nrPSaKKNV/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}