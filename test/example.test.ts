describe('example tests to check jest', () => {
  test('truthy', () => {
    expect(true).toBeTruthy();
    expect({}).toBeTruthy();
    expect([]).toBeTruthy();
    expect(1).toBeTruthy();
    expect(-1).toBeTruthy();
  });

  test('falsy', () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
  });

  it('should convert correct to number', () => {
    expect(+'abc').toBeNaN();
    const t: any = undefined;
    expect(+t).toBeNaN();
    expect(+'one').toBeNaN();
    expect(+{ val: 42 }).toBeNaN();

    expect(+'12.3').toBe(12.3);
    expect(+'NaN' || 1).toBe(1);
    expect(+t || 2).toBe(2);
  });
});
