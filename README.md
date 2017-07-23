# Manipulate stdout streams. Use x as the current data packet.

## useful functions:

### buffer(condition, act)

condition: function, return a boolean when the passed in array (called the buffer) matches your condition

act: what to do with the array (called the buffer) when the condition is met. the buffer is cleared afterwards.

example: add a second newline after every newline: `npt "buffer(_ => x == '\n', _ => _.join('') + '\n' )"`

P.S, I know this readme sucks