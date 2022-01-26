function startClassify(){
navigater.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VgzN33qXH/model.json', modelReady) 

}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(){
    
}