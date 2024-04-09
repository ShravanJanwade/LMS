package batch.backend.json.batch.Controller;

import batch.backend.json.batch.Model.Batch;
import batch.backend.json.batch.Model.BatchUserDTO;
import batch.backend.json.batch.Model.User;
import batch.backend.json.batch.Services.BatchService;
import batch.backend.json.batch.Services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/batches")
public class BatchController {

    @Autowired
    private BatchService batchService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<Batch>> getAllBatches() {
        List<Batch> batches = batchService.getAllBatches();
        return new ResponseEntity<>(batches, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Batch> getBatchById(@PathVariable("id") Long id) {
        Batch batch = batchService.getBatchById(id);
        if (batch != null) {
            return new ResponseEntity<>(batch, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Batch> createBatch(@RequestBody Batch batch) {
        Batch createdBatch = batchService.saveBatch(batch);
        return new ResponseEntity<>(createdBatch, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBatch(@PathVariable("id") Long id) {
        batchService.deleteBatch(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{batchId}/users")
    public ResponseEntity<Batch> addUsersToBatch(@PathVariable("batchId") Long batchId,
            @RequestBody BatchUserDTO batchUserDTO) {
        Batch batch = batchService.getBatchById(batchId);
        if (batch == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<Long> userIds = batchUserDTO.getUserIds();
        if (userIds == null || userIds.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        for (Long userId : userIds) {
            User user = userService.getUserById(userId);
            if (user != null) {
                batch.getBatchUsers().add(user);
            } else {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }

        batchService.saveBatch(batch);

        return new ResponseEntity<>(batch, HttpStatus.OK);
    }

    @GetMapping("/{batchId}/users")
    public ResponseEntity<List<User>> getUsersFromBatch(@PathVariable("batchId") Long batchId) {
        Batch batch = batchService.getBatchById(batchId);
        if (batch == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<User> users = batch.getBatchUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @DeleteMapping("/{batchId}/users")
    public ResponseEntity<List<User>> deleteUsersFromBatch(@PathVariable("batchId") Long batchId,
            @RequestBody List<Long> userId) {
        Batch batch = batchService.getBatchById(batchId);
        if (batch == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<User> users = batch.getBatchUsers();
        for (Long id : userId) {
            users.remove(userService.getUserById(id));
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
