function check(){
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Ue1SnlE3C/model.json",modelready)
}
function modelready(){
    classifier.classify(getresult)
}
function getresult(){
    console.log ("getresult")
}