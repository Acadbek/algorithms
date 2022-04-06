class Solution {
    solve(n, a, b) {
        return n - Math.max(a + 1, n - b) + 1;
    }
}