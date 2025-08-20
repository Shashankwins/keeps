@Test(expected = ArithmeticException.class)
public void testDivideByZero() {
    App app = new App();
    app.divide(10, 0);
}
