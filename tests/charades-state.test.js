import CharadesState from '../src/scripts/charades-state';

describe('CharadesState', () => {
  it('chooses all cards in fixed order if set by the author', () => {
    const state = new CharadesState(
      {
        items: ['1', '2', '3', '4'],
        behavior: { cardSelection: 'forceAll', randomOrder: false }
      },
      {}
    );
    expect(state.remainingCards).toMatchObject(['1', '2', '3', '4']);
  });

  it('chooses all cards in random order if set by the author', () => {
    const state = new CharadesState(
      {
        items: ['1', '2', '3', '4'],
        behavior: { cardSelection: 'forceAll', randomOrder: true }
      },
      {}
    );
    expect(state.remainingCards.sort()).toMatchObject(['1', '2', '3', '4']);
  });

  it('chooses all cards in fixed order if set by the player', () => {
    const state = new CharadesState(
      {
        items: ['1', '2', '3', '4'],
        behavior: { cardSelection: 'user' }
      },
      { cardSelection: 'all-fixed-order' }
    );
    expect(state.remainingCards).toMatchObject(['1', '2', '3', '4']);
  });

  it('chooses all cards in random order if set by the player', () => {
    const state = new CharadesState(
      {
        items: ['1', '2', '3', '4'],
        behavior: { cardSelection: 'user' }
      },
      { cardSelection: 'all-random-order' }
    );
    expect(state.remainingCards.sort()).toMatchObject(['1', '2', '3', '4']);
  });

  it('chooses a subset of random cards if set by the author', () => {
    const state = new CharadesState(
      {
        items: ['1', '2', '3', '4'],
        behavior: { cardSelection: 'forceSelection', itemCount: 2 }
      },
      {}
    );
    expect(state.remainingCards.length).toEqual(2);
  });

  it('chooses a subset of random cards if set by the player', () => {
    const state = new CharadesState(
      {
        items: ['1', '2', '3', '4'],
        behavior: { cardSelection: 'user' }
      },
      { cardSelection: 'selection', itemCount: 2 }
    );
    expect(state.remainingCards.length).toEqual(2);
  });
});
