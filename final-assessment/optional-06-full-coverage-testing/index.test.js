import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// 1. Tes Biasa
test ('menjumlahkan 2 dan 3 seharusnya hasilnya 5', () => {
    const hasil = sum(2, 3);
    // console.log(hasil);
    assert.strictEqual((hasil), 5);
});

// 2. Tes dia bukan Number
test ('kalau bukan a maka hasil 0', () => {
    const hasil = sum(2, '3');
    // console.log(hasil);
    assert.strictEqual((hasil), 0);
});

test ('kalau bukan b maka hasil 0', () => {
    const hasil = sum('2', 3);
    // console.log(hasil);
    assert.strictEqual((hasil), 0);
});

// 3. Tes Angka Negatif
test ('kalau a negatif maka hasil 0', () => {
    const hasil = sum(-1, 3);
    // console.log(hasil);
    assert.strictEqual((hasil), 0);
});

test ('kalau b negatif maka hasil 0', () => {
    const hasil = sum(2, -3);
    // console.log(hasil);
    assert.strictEqual((hasil), 0);
});
