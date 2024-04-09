package batch.backend.json.batch.Model;

import java.util.List;

public class BatchUserDTO {
    private List<Long> userIds;

    // Getter and setter
    public List<Long> getUserIds() {
        return userIds;
    }

    public void setUserIds(List<Long> userIds) {
        this.userIds = userIds;
    }
}
