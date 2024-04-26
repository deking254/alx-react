import utils from './utils';
test("getFullYear returns the right year", ()=>{
  expect(utils.getFullYear()).toEqual("2024");
})

test("getFooterCopy returns the correct strings depending on the argument passed", ()=>{
  expect(utils.getFooterCopy(true)).toEqual("Holberton School");
  expect(utils.getFooterCopy(false)).toEqual("Holberton School main dashboard");
})

test("getLatestNotification returns the expected value", ()=>{
  expect(utils.getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
})
