describe("Registration", () => {
  const url = "https://anatoly-karpovich.github.io/demo-login-form/";
  

  before(async () => {
    await browser.maximizeWindow();
  });
  beforeEach(async () => {
    await browser.url(url);
  });
  context("Positive scenarious", () => {
    const validCredentials = {
      username: "Tommy",
      password: "123456789Ll",
    };
    const expectedSuccessfullMessageText =
      "Successfully registered! Please, click Back to return on login page";

    it("Should register with valid credentials", async () => {
      const registerWindowButton = await $("#registerOnLogin");
      const username = await $("#userNameOnRegister");
      const password = await $("#passwordOnRegister");
      const registerButton = await $("#register");

      await registerWindowButton.click();
      await username.setValue(validCredentials.username);
      await password.setValue(validCredentials.password);
      await registerButton.click();
      
      const actualSuccessfullMessage =  $("#errorMessageOnRegister");
      const actualSuccessfullMessageText = (
        await actualSuccessfullMessage
      ).getText();
      await expect(actualSuccessfullMessageText).toHaveText(
        expectedSuccessfullMessageText
      );
    });
  });
});

  context("Negative scenarious", () => {
    const validCredentials = {
      username: "   ",
      password: "   ",
    };
    const expectedSuccessfullMessageText =
      "Successfully registered! Please, click Back to return on login page";

    it("Should register with invalid credentials", async () => {
      const registerWindowButton = await $("#registerOnLogin");
      const username = await $("#userNameOnRegister");
      const password = await $("#passwordOnRegister");
      const registerButton = await $("#register");

      await registerWindowButton.click();
      await username.setValue(validCredentials.username);
      await password.setValue(validCredentials.password);
      await registerButton.click();
      browser.pause(10000);

      const actualSuccessfullMessage =  $("#errorMessageOnRegister");
      const actualSuccessfullMessageText =
        await actualSuccessfullMessage.getText();
      await expect(actualSuccessfullMessageText).toHaveText(
        expectedSuccessfullMessageText
      );
    });
  });

  describe("Authentication", () => {
    const url = "https://anatoly-karpovich.github.io/demo-login-form/";
    
  
    before(async () => {
      await browser.maximizeWindow();
    });
    beforeEach(async () => {
      await browser.url(url);
    });
    context("Positive scenarious", () => {
      const validCredentials = {
        username: "Tommy",
        password: "123456789Ll",
      };
      const expectedSuccessfullMessageText =
        `Hello, ${validCredentials.username}!`;
  
      it("Should login with valid credentials", async () => {
        const username = await $("#userNameOnRegister");
        const password = await $("#passwordOnRegister");
        const submitButton = await $("#submit");
  
        
        await username.setValue(validCredentials.username);
        await password.setValue(validCredentials.password);
        await submitButton.click();
        
        const actualSuccessfullMessage = await $("#successMessage");
        const actualSuccessfullMessageText = (
          await actualSuccessfullMessage
        ).getText();
        await expect(actualSuccessfullMessageText).toHaveText(
          expectedSuccessfullMessageText
        );
      });
    });
  });
  
    context("Negative scenarious", () => {
      const validCredentials = {
        username: "Ja",
        password: "123Tt",
      };
      const expectedSuccessfullMessageText =
        "Invalid credentials";
  
      it("Should login with invalid credentials", async () => {
        const username = await $("#userNameOnRegister");
        const password = await $("#passwordOnRegister");
        const submitButton = await $("#submit");
  
        
        await username.setValue(validCredentials.username);
        await password.setValue(validCredentials.password);
        await submitButton.click();
        browser.pause(10000);
  
        const actualErrorMessage =  await $("#errorMessage");
        const actualSuccessfullMessageText =
          await actualErrorMessage.getText();
        await expect(actualSuccessfullMessageText).toHaveText(
          expectedSuccessfullMessageText
        );
      });
    });

