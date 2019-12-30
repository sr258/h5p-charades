import CharadesParameters from '../src/scripts/charades-parameters';

describe('CharadesParameters', () => {
  it('has default values if values are missing in the content.json file', () => {
    const cp = new CharadesParameters();
    expect(cp.taskDescription).toEqual('Explain the words.');
    expect(cp.items).toBeDefined();
    expect(cp.items.length).toBe(1);
    expect(cp.behavior).toBeDefined();
    expect(cp.behavior.allowRetry).toEqual(true);
  });

  it('overrides default values with the values from content.json', () => {
    const cp = new CharadesParameters({
      taskDescription: 'test value',
      behavior: {
        allowRetry: false
      }
    });
    expect(cp.taskDescription).toEqual('test value');
    expect(cp.behavior.allowRetry).toEqual(false);
    // check if default values for object "behavior" are still present
    expect(cp.behavior.randomOrder).toEqual(true);
  });
});
