import 'mocha'
import { equal } from 'assert'
import { calculateWinnerByhorizontal,calculateWinnerByVertical, isValidTransition,calculateWinnerByDiagonal, finished } from './logic'
import { Board } from './entities'

describe('calculateWinner()', () => {

  it('should work for a horizontal winner x', () => {
    const board: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['o', null, null, null, null, null, null],
      ['o', null, null, null, null, null, null],
      ['o', null, null, null, null, null, null],
      ['o', null, null, null, null, null, null],
      ['x', 'x', 'x', 'x', null, null, null],

    ]
    equal(calculateWinnerByhorizontal(board), 'x')
  })

  it('should work for a horizontal winner o', () => {
    const board: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['o', 'o', 'o', 'o', null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(calculateWinnerByhorizontal(board), 'o')
  })

  it('should work for a vertical winner x', () => {
    const board: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['x', null, null, null, null, null, null],
      ['x', null, null, null, null, null, null],
      ['x', null, null, null, null, null, null],
      ['x', null,null,null, null, null, null],
    ]
    equal(calculateWinnerByVertical(board), 'x')
  })

  it('should work for a vertical winner o', () => {
    const board: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['o', null, null, null, null, null, null],
      ['o', null, null, null, null, null, null],
      ['o', null, null, null, null, null, null],
      ['o', null,null,null, null, null, null],
    ]
    equal(calculateWinnerByVertical(board), 'o')
  })

  it('should work for a diagonal winner [rtl]', () => {
    const board: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, 'x', null, null, null],
      [null, null, 'x', null, null, null, null],
      [null, 'x', null, null, null, null, null],
      ['x', null, null, null, null, null, null],
    ]
    equal(calculateWinnerByDiagonal(board), 'x')
  })

  it('should work for a diagonal winner [ltr]', () => {
    const board: Board = [
      [null, null, null, null, null, null, 'x'],
      [null, null, null, null, null, 'x', null],
      [null, null, null, null, 'x', null, null],
      [null, null, null, 'x', null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(calculateWinnerByDiagonal(board), 'o')
  })

  it('should work when there is no winner', () => {
    const board: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(calculateWinnerByhorizontal(board), null)
  })

  it('should work when the board is empty', () => {
    const board: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(calculateWinnerByhorizontal(board), null)
  })
})

describe('isValidTransition()', () => {

  it('should allow for a move from x', () => {
    const from: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    const to: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(isValidTransition('x', from, to), true)
  })

  it('should allow for a move from o', () => {
    const from: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    const to: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(isValidTransition('o', from, to), true)
  })

  it('should not allow to overwrite', () => {
    const from: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    const to: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(isValidTransition('x', from, to), false)
  })

  it('should not allow to do more than 1 change', () => {
    const from: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    const to: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(isValidTransition('x', from, to), false)
  })

  it('should not allow to do more than 1 change even if 1 is valid', () => {
    const from: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    const to: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(isValidTransition('o', from, to), false)
  })
})

describe('finished()', () => {

  it('should finish when there are no moves left', () => {
    const board: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(finished(board), true)
  })

  it('should not finish when there are moves left', () => {
    const board: Board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    equal(finished(board), false)
  })
})
