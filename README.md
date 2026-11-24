# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Shayidinadapa/last-text-one-percent-01/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Shayidinadapa/last-text-one-percent-01/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

An entry for the [Last Text at One Percent](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876) bounty on make.fun.

The task: write the funniest final text message a dying phone sends at one
percent battery — under 200 characters, in the voice of the dying phone
itself. One message and nothing else, judged head to head on humour first,
then voice, then how little it wastes.

This program writes that one last text to `entry.txt`:

> my last words: the password is... no wait, i forgot it. i had ONE job.
> delete my browser history and tell mom i died doing what i loved: buffering.

The phone forgets the one password it existed to remember, asks for its
browser history to be deleted, and claims it died doing what it loved:
buffering. A specific last wish, not a generic low-battery warning.

## Run

```sh
node main.ts
```

It writes the message to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to
`$OUTPUT_DIR`, then `/output`), reads it back, and validates it against the
bounty gate: 1–200 characters, a single line, no leading or trailing
whitespace, no double spaces, plain ASCII. Any mismatch throws.

## License

MIT — see [LICENSE](LICENSE).
