// spec.js
describe('Navigate to "qaclickacademy"', function() {

function selectItems(product){
  element.all(by.tagName("app-card")).each(function(item){
      
    item.element(by.css("h4[class='card-title'] a")).getText().then(function(text){
      if(text==(product)){
        item.element(by.css("button[class*='btn-info']")).click();
      }
    });
  });
}



  
  it('Check all fileds and validate them', function() {
    // browser.waitForAngularEnabled(false);
    browser.get('https://qaclickacademy.github.io/protocommerce/');
    element(by.name("name")).sendKeys("Ilyxans");
    element(by.name("email")).sendKeys("kovalyov21@gmail.com");
    element(by.id("exampleInputPassword1")).sendKeys("067921ilyA");
    element(by.css("input[type='checkbox']")).click();
    element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
    // element.all(by.name("inlineRadioOptions")).first().click();
    element.all(by.cssContainingText("[name='inlineRadioOptions'] option","Student")).click();
    element(by.buttonText("Submit")).click().then(function(){
      element(by.css("div[class*='success']")).getText().then(function(text){
        console.log(text);
      });
    });
    element(by.name("name")).clear();
    element(by.name("name")).sendKeys("M").then(function(){
      element(by.buttonText("Submit")).click();
    }).then(function()
      {
        element(by.css("div[class*='alert-danger']")).getText().then(function(text)
      {
        console.log(text);
      });
    });
    element(by.linkText("Shop")).click();
    
    selectItems("Nokia Edge");
    selectItems("Nokia Edge");
    selectItems("Blackberry");




    element(by.partialLinkText("Checkout")).getText().then(function(text){
      var res=text.split("(");
      expect(res[1].trim().charAt(0)).toBe("3");


    });
    // element(by.partialLinkText("Checkout")).getText().then(function(text){
    //   var res=text.split("("); //split is for spliting the text for two parts;
    //   var x=Number(res[1].trim().charAt(0)); //convert string to integer
      // var y=x+1; //example how to add one more intiger so the test will be failed;
      // console.log(x);

      // expect(res[1].trim().charAt(0)).toBe(x); //trim is for remove spaces around number 1; chraAt(0) will give number; charAt takes index of the desired symbol
    // });

    element(by.css("a[class='nav-link btn btn-primary']")).click();
    browser.sleep(5000);

  });
});