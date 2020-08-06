package action.testng.report.calc

import org.testng.Assert.assertThrows
import org.testng.annotations.Test

import java.math.BigDecimal
import kotlin.test.assertEquals

class CalcUtilsTest {

    @Test
    fun `test scale`() {
        assertEquals(scale("100.0000"), BigDecimal("100.00"))
        assertEquals(scale("100.0100"), BigDecimal("100.01"))
        assertEquals(scale("100.110"), BigDecimal("100.10"))
        assertEquals(scale("100.1"), BigDecimal("100.10"))
        assertEquals(scale("100"), BigDecimal("100.00"))
        assertEquals(scale(".0000"), BigDecimal("0.00"))
        assertEquals(scale(".0100"), BigDecimal("0.01"))
        assertEquals(scale(".110"), BigDecimal("0.11"))
        assertEquals(scale(".1"), BigDecimal("0.10"))
        assertEquals(scale("0"), BigDecimal("0.00"))
    }

    @Test
    fun `test error handling`() {
        assertThrows(IllegalStateException::class.java) { scale("100.001") }
    }

    private fun scale(amount: String): BigDecimal {
        return CalcUtils.scaleAmount(BigDecimal(amount))
    }
}