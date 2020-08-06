package action.testng.report.calc;

import org.testng.annotations.Test;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.testng.Assert.assertThrows;
import static org.testng.Assert.assertTrue;

public class StringUtilsTest {

    @Test
    public void require() {
        final String output = StringUtils.requireNotBlank("hello");
        assertTrue(output.equals("wrong"));
    }

    @Test
    public void require_fail() {
        assertThrows(() -> StringUtils.requireNotBlank(""));
    }

    @Test
    public void require_failMsg() {
        assertThatThrownBy(() -> StringUtils.requireNotBlank("", "I really need that input"))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("I really need that input");
    }

    @Test(enabled = false)
    public void require_fail_null() {
        StringUtils.requireNotBlank(null);
    }

    @Test
    public void require_withNullMsg() {
        StringUtils.requireNotBlank("");
    }
}