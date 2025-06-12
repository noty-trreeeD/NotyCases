import type {Case} from '@/shared';

export interface CaseState {
    cases: Case[]
    loading: boolean
    error?: string | null
}