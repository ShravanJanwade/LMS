package batch.backend.json.batch.Services;

import batch.backend.json.batch.Model.Batch;

import java.util.List;

public interface BatchService {
    List<Batch> getAllBatches();

    Batch getBatchById(Long id);

    Batch saveBatch(Batch batch);

    void deleteBatch(Long id);
}
