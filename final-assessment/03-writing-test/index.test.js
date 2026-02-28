import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test ('menjumlahkan 2 dan 3 seharusnya hasilnya 5', () => {
    const hasil = sum(2, 3);
    console.log(hasil);
    assert.strictEqual((hasil), 5);
})