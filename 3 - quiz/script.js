
  class Model {
    constructor() {
      this.request = new Request("https://opentdb.com/api.php?amount=1&encode=url3986&token=62d74523c25ccc6d94a5cd5c0f46a82c871ff9e98a3e0545fcfd36dc1902819a", {method: 'GET'});
      this.question = '';
      this.category = '';
      this.option1 = '';
      this.option2 = '';
      this.option3 = '';
      this.option4 = '';
    }

    fetchQuestion(){
      this.result = [];
      fetch(this.request).then(function(response) {

        if (response.status !== 200) {
            console.log('There was a problem with the request: ' +
              response.status);
              return;
        }
        response.json().then(function(data) {
          cat = data["results"][0]["category"];
          qtn = data["results"][0]["question"];
          op1 = data["results"][0]["correct_answer"]
          op2 = data["results"][0]["incorrect_answers"][0],
          op3 = data["results"][0]["incorrect_answers"][1]
          op4 = data["results"][0]["incorrect_answers"][2]
          });
      });
      
    }

  }
  
  class View {
    constructor() {
      this.question  = document.getElementById("question"); 
      this.option1   = document.getElementById("option1");
      this.option2   = document.getElementById("option2");
      this.option3   = document.getElementById("option3");
      this.option4   = document.getElementById("option4");
      this.category  = document.getElementById("category");
    }

    setQuestion(question){
      this.question = question
    }

    setOptions(option1, option2, option3, option4){
      this.option1.innerHTML = option1
      this.option2.innerHTML = option2
      this.option3.innerHTML = option3
      this.option4.innerHTML = option4
    }

    setCategory(category){
      this.category = category
    }
  }
  
  class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
      this.model.fetchQuestion();
      this.view.setQuestion(this.model.question);
      this.view.setOptions(this.model.option4, this.model.option3, this.model.option2, this.model.option1);
      this.view.setCategory(this.model.category);    
    }

  }
  
  const app = new Controller(new Model(), new View())